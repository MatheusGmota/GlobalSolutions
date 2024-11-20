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
                {questoes.map((q) => (
                    <div key={q.idQuestao}>
                        <p>
                            {q.idQuestao} - {q.questao}
                        </p>
                        <input type="text"/>
                    </div>
                ))}
            </div>
        </div>
    )
}