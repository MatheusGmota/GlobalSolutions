"use client"


import CardAluno from "@/components/CardAluno/CardAluno";
import { TipoAluno } from "@/types"
import { useEffect, useState } from "react"


export default function Equipe() {
    const [alunos, setAlunos] = useState<TipoAluno[]>([]);

    useEffect(() =>{
        const chamadaApi = async () => {
            const response = await fetch("https://gist.githubusercontent.com/MatheusGmota/37aa6f86113271aa0b0dddc9b001d2bc/raw/ab249a30548d2aaf78c8b4d7a7337313460d1e54/time.json");

            const data = await response.json();
            setAlunos(data);
        }

        chamadaApi();
    },[])

    return (
        <main className="main">
        <h2 className="title-home">
            Conheça o Nosso Time
        </h2>
        <div className="grid gap-10 xl:grid-cols-3">
            {alunos.map((a, i) => (
            <div key={i} className="">
                <CardAluno aluno={a}/>
            </div>
            ))}
        </div>
        </main>
        
    )
}
