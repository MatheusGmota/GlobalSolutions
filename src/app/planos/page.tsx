"use client"

import CardPlano from "@/components/CardPlano/CardPlano"
import { TipoPlano } from "@/types"
import { useEffect, useState } from "react"

export default function Planos() {
    
    const [planos, setPlanos] = useState<TipoPlano[]>([])

    useEffect(() => {
        const chamadaApi = async () => {
            const response = await fetch(process.env.NEXT_PUBLIC_URI as string + "planos")
            if (response.ok) {
                const data = await response.json()
                setPlanos(data)
            }
        }
        chamadaApi()
    }, [])

    return (
        <main className="main">
            <div className="relative isolate px-6 pb-24 sm:pb-32 lg:px-8">
                <div className="mx-auto max-w-4xl text-center">
                    <p className="mt-2 text-balance text-2xl font-semibold tracking-tight text-white sm:text-4xl">
                        Escolha o melhor plano para você
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
                    {planos.map(p => (
                        <CardPlano key={p.idPlano} plano={p} />
                    ))}
                </div>
            </div>
        </main>
    )
}
