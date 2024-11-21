"use client";
import { TipoEficiencia } from "@/types";
import { useEffect, useState } from "react";

export default function DashboardEficiencia({ eficiencia }: { eficiencia: TipoEficiencia }) {
    const eficienciaEnergetica = eficiencia.eficienciaEnergetica;
    const [color, setColor] = useState<string>("text-red-500");

    useEffect(() => {
        if (eficienciaEnergetica <= 0.3) {
            setColor("text-red-500");
        } else if (eficienciaEnergetica < 0.5) {
            setColor("text-orange-600");
        } else if (eficienciaEnergetica >= 0.5 && eficienciaEnergetica <= 0.7) {
            setColor("text-yellow-300");
        } else {
            setColor("text-green-500");
        }
    }, [eficienciaEnergetica]);

    return (
        <div className="grid content-center p-4 shadow-lg rounded border border-gray-800 lg:shadow-none lg:border-0">
            <div className="border-b border-sky-800 py-3">
                <h2 className="text-white text-center text-base font-bold uppercase">
                    {eficiencia.setor ? `Setor ${eficiencia.setor}` : "Eficiência Geral"}
                </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-10 lg:gap-0 p-5">
                <div className="flex flex-col items-center gap-5">
                    <h3 className="font-semibold text-white text-sm lg:text-base">Eficiência Energética</h3>
                    <p className="flex flex-col items-center justify-center">
                        <span className={`font-semibold text-4xl ${color}`}>{eficienciaEnergetica}</span>
                        <span>por KWh</span>
                    </p>
                </div>
                <div className="flex flex-col items-center gap-5">
                    <h3 className="font-semibold text-white text-sm lg:text-base">Visão Geral</h3>
                    <p className="text-sm">{eficiencia.visaoGeral}</p>
                    <p className="text-xs lg:text-sm">
                        Consumo mensal de energia {eficiencia.consumoMensal} <strong>KWh</strong>
                    </p>
                </div>
            </div>
        </div>
    );
}
