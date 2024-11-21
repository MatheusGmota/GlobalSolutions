"use client"
import { TipoEficiencia } from "@/types";
import { useEffect, useState } from "react";

export default function DashboardEficiencia({eficiencia}: {eficiencia: TipoEficiencia}) {
    const eficienciaEnergetica = eficiencia.eficienciaEnergetica
    const [color, setColor] = useState<string>("")
    useEffect(() => {
        if (eficienciaEnergetica <= 0.3) {
            setColor("red-500")
        } else if (eficienciaEnergetica < 0.5) {
            setColor("orange-600")
        } else if (eficienciaEnergetica >= 0.5 && eficienciaEnergetica <= 0.7) {
            setColor("yellow-300")
        }else {
            setColor("green-500")
        }
    }, [eficienciaEnergetica])

    return (
        <div className="grid content-center p-4 shadow-lg rounded border border-gray-800 lg:shadow-none lg:border-0">
            <div className="border-b border-sky-800 py-3">
                <h2 className="text-white text-center text-base font-bold">{eficiencia.setor ? `Setor ${eficiencia.setor}` : "Eficiencia Geral"}</h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-0 p-5">
                <div className="flex flex-col items-center gap-5">
                    <h3 className="font-semibold text-white text-sm lg:text-base">Eficiência Energética</h3>
                    <p className="flex flex-col items-center justify-center"><span className={`font-semibold text-4xl text-${color}`}>{eficienciaEnergetica}</span> <span>por KWh</span></p>
                </div>
                <div className="flex flex-col items-center gap-5">
                    <h3 className="font-semibold text-white text-sm lg:text-base">Visão Geral</h3>
                    <p className="text-sm">{eficiencia.visaoGeral} Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque ullam id laudantium distinctio deleniti eos, quibusdam corrupti qui iste dolore aperiam repudiandae esse ut aut odio totam reprehenderit nesciunt in?</p>
                    <p className="text-xs lg:text-sm">Consumo mensal de energia {eficiencia.consumoMensal} <strong>KWh</strong></p>
                </div>
            </div>
        </div>
    )
}
