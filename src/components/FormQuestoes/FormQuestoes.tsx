"use client"

import { TipoQuestoes, TipoRespostas } from "@/types";
import { useEffect, useState } from "react"

export function FormQuestoes({ onSubmit }: { onSubmit: () => void }) {

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

    const [respostas, setRespostas] = useState<TipoRespostas[]>([])
     
    const [producaoMensal, setProducaoMensal] = useState<number>(0)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()

        const data = JSON.stringify({
            respostas: respostas,
            equipamentos: [],
            producaoMensal: producaoMensal
        })

        localStorage.setItem("infoEmpresa", data)
        onSubmit()
    }

    const handleRespostaChange = (idQuestao: number, resposta: string) => {
        setRespostas((prevRespostas) => {
            const index = prevRespostas.findIndex((r) => r.idQuestao === idQuestao);
            if (index !== -1) {
                const updatedRespostas = [...prevRespostas];
                updatedRespostas[index].resposta = resposta;
                return updatedRespostas;
            }

            return [...prevRespostas, { idQuestao, resposta }];
        });
    };
    return (
        <>
            <div className="p-4">
                <h2 className="text-white text-center text-2xl lg:text-4xl my-2">Questões Gerais</h2>
                <p className="text-sm/5 lg:text-base my-2">Responda as perguntas sobre características da sua empresa</p>
            </div>
            <div>
                <form onSubmit={handleSubmit} className="flex flex-col gap-2 p-4">
                    {questoes.map((q) => (
                    <fieldset key={q.idQuestao} className="mb-2">
                        <label className="text-white text-sm lg:text-base font-semibold block mb-2">
                            {q.questao}
                        </label>
                        <input
                            id={`resposta${q.idQuestao}`}
                            name="resposta"
                            type="text"
                            className="input input-bordered input-primary text-sm w-full border-sky-800 focus-within:outline-none" 
                            placeholder="Digite aqui sua resposta"
                            onChange={(e) => handleRespostaChange(q.idQuestao, e.target.value)} />
                    </fieldset>
                    ))}
                    <fieldset className="mb-2">
                        <label className="text-white text-sm lg:text-base font-semibold block mb-2">
                            Qual a produção mensal da empresa?
                        </label>
                        <input 
                            name="producaoMensal"
                            type="number"
                            className="input input-bordered input-primary text-sm w-full border-sky-800 focus-within:outline-none" 
                            placeholder="Digite aqui sua resposta"
                            onChange={(e) => setProducaoMensal(parseFloat(e.target.value))}/>
                    </fieldset>
                    <fieldset>
                        <button type="submit" className="btn bg-sky-800 text-white w-full">Avançar</button>
                    </fieldset>
                </form>
            </div>
        </>
    )
}