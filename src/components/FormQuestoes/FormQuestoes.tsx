"use client"

import { TipoQuestoes } from "@/types";
import { useEffect, useState } from "react"

export function FormQuestoes() {

    const [questoes, setQuestoes] = useState<TipoQuestoes[]>([]);

    useEffect(() => {
        const chamadaApi = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/questoes');
                const data = await response.json();
                setQuestoes(data);
            } catch (e) {
                console.error(e);
            }
        }
        chamadaApi();
    }, [])

    return (
        <div className="questoes">
            <div>
                <h2 className="text-center text-white text-3xl p-3">Questões Gerais</h2>
                <p className="text-sm m-3">Responda as perguntas sobre características da sua empresa</p>
                {questoes.map((q) => (
                    <div key={q.idQuestao} className="perguntas">
                        <p>
                            {q.questao}
                        </p>
                        <input type="text"/>
                    </div>
                ))}
            </div>
        </div>
    )
}