"use client"

import { InterfaceTipoEmpresas, TipoEmpresa } from "@/types";
import React, { useEffect, useState } from "react";

export function FormEmpresa({ onSubmit }: { onSubmit: () => void }) {

    const [empresa, setEmpresa] = useState<TipoEmpresa>({
        idTipo: 0,
        nome: "",
        local: "",
    })
    const [tipoEmpresas, setTipoEmpresas] = useState<InterfaceTipoEmpresas[]>([]);

    useEffect(() => {
        const chamadaApi = async () => {
            try {
                const response = await fetch(process.env.NEXT_PUBLIC_URI as string + '/tipo-empresa');
                const data = await response.json();
                setTipoEmpresas(data);
            } catch (e) {
                console.error(e)
            }
        }
        chamadaApi();
    }, [])

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        
        try{
            const response = await fetch(process.env.NEXT_PUBLIC_URI as string + 'empresa', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(empresa)
            });
            if(response.ok){
                const data = await response.json();
                localStorage.setItem("id", data);
                onSubmit()
            }
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <div className="flex flex-col">
            <h2 className="text-white text-center text-2xl lg:text-4xl my-2">Sobre a empresa</h2>
            <div className="self-center card bg-base-100 w-96 shadow-xl">
                <form className="grid gap-5 p-6" onSubmit={handleSubmit}>
                    <div>
                        <label className="text-white text-sm lg:text-base font-semibold block space-y-5">Nome da Empresa</label>
                        <input type="text" name="nome" id="idNome" className="input input-bordered w-full max-w-xs mt-2 placeholder:text-sm" placeholder="Ex: BE-Fore" required onChange={(e) => setEmpresa(
                            {...empresa, nome: e.target.value}
                        )}/>
                    </div>
                    <div>
                        <label className="text-white text-sm lg:text-base font-semibold block">Localização da Empresa</label>
                        <input type="text" name="local" id="idLocal" placeholder="Ex: SP" className="input input-bordered w-full max-w-xs mt-2 placeholder:text-sm" required onChange={(e) => setEmpresa(
                            {...empresa, local: e.target.value}
                        )}/>
                    </div>
                    <div>
                        <label className="text-white text-sm lg:text-base font-semibold block">Tipo</label>
                        <select name="idTipo" id="idTipo" className="select select-bordered w-full max-w-xs mt-2" onChange={(e) => setEmpresa(
                            {...empresa, idTipo: parseInt(e.target.value)}
                        )} required>
                            <option disabled defaultChecked>--- Tipo da Empresa ---</option>
                            {tipoEmpresas.map((t, i) => (
                                <option value={t.id} key={i}>
                                    {t.tipo}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button type="submit" className="btn bg-sky-800 text-white w-full">Avançar</button>
                </form>
            </div>
        </div>
    )
}