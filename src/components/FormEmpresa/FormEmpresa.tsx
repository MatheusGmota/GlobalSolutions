"use client"

import { InterfaceTipoEmpresas, TipoEmpresa } from "@/types";
import React, { useEffect, useState } from "react";

export function FormEmpresa() {

    const [empresa, setEmpresa] = useState<TipoEmpresa>({
        idTipo: 0,
        nome: "",
        local: "",
    })
    const [tipoEmpresas, setTipoEmpresas] = useState<InterfaceTipoEmpresas[]>([]);

    useEffect(() => {
        const chamadaApi = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/tipo-empresa');
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
            const response = await fetch('http://localhost:8080/api/empresa', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(empresa)
            });
            if(response.ok){
                const data = await response.json();
                localStorage.setItem("id", data);
            }
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <>
            <div className="cad-empresa">
                <form className="inputs" onSubmit={handleSubmit}>
                    <div>
                        <label>Nome da Empresa</label>
                        <input className="border-white" type="text" name="nome" id="idNome" placeholder="Ex: BE-Fore" onChange={(e) => setEmpresa(
                            {...empresa, nome: e.target.value}
                        )}/>
                    </div>
                    <div>
                        <label>Localização da Empresa</label>
                        <input type="text" name="local" id="idLocal" placeholder="Ex: SP" onChange={(e) => setEmpresa(
                            {...empresa, local: e.target.value}
                        )}/>
                    </div>
                    <div>
                        <label>Tipo</label>
                        <select name="idTipo" id="idTipo" className="select select-bordered w-full max-w-xs mt-2" onChange={(e) => setEmpresa(
                            {...empresa, idTipo: parseInt(e.target.value)}
                        )}>
                            <option disabled defaultChecked>--- Tipo da Empresa ---</option>
                            {tipoEmpresas.map((t, i) => (
                                <option value={t.id} key={i}>
                                    {t.tipo}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button type="submit" className="button">Avançar</button>
                </form>
            </div>
        </>
    )
}