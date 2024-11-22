"use client"


import CardAluno from "@/components/CardAluno/CardAluno";
import { TipoAluno } from "@/types"
import { useEffect, useState } from "react"


export default function Equipe() {
    const [alunos, setAlunos] = useState<TipoAluno[]>([]);

    useEffect(() =>{
        const chamadaApi = async () => {
            const response = await fetch(process.env.NEXT_PUBLIC_URI_ALUNOS as string);

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
