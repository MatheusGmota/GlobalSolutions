"use client"

import { TipoEmpresas } from "@/types";
import { useEffect, useState } from "react";

export function FormEmpresa() {

    const [tipoEmpresas, setTipoEmpresas] = useState<TipoEmpresas[]>([]);

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
    })

    return (
        <>
            <div className="cad-empresa">
                <section className="inputs">
                    <div>
                        <p>Nome da Empresa</p>
                        <input className="border-white" type="text" name="nome" id="idNome" placeholder="Ex: BE-Fore" />
                    </div>
                    <div>
                        <p>Localização da Empresa</p>
                        <input type="text" name="local" id="idLocal" placeholder="Ex: SP" />
                    </div>
                    <div>
                        <p>Tipo</p>
                        <select name="idTipo" id="idTipo" className="select select-bordered w-full max-w-xs mt-2">
                            <option disabled selected>--- Tipo da Empresa ---</option>
                            {tipoEmpresas.map((t) => (
                                <option value={t.idTipo} key={t.idTipo}>
                                    {t.tipo}
                                </option>
                            ))}
                        </select>
                    </div>
                </section>
            </div>
        </>
    )
}