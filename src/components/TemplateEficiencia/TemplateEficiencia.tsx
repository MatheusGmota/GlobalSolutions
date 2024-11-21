import { useState } from "react";
import DashboardEficiencia from "../DashboardEficiencia/DashboardEficiencia";
import FeedbackQuestao from "../FeedbackQuestao/FeedbackQuestao";
import { InterfaceEficiencia, TipoFeedbackQuestao } from "@/types";


export default function TemplateEficiencia() {
    const [feedbackQuestoes, setFeedbackQuestoes] = useState<TipoFeedbackQuestao[]>([])
    
    const [eficienciaEnergetica, setEficienciaEnergetica] = useState<InterfaceEficiencia>({
        eficienciaSetor: [],
        eficienciaGeral: {eficienciaEnergetica: 0,consumoMensal:0, visaoGeral: ""}
    })

    return (
        <section>
            <h2 className="font-bold text-sky-500 text-center lg:text-2xl">Relatório Geral e Sugestões</h2>
            <div>
                {feedbackQuestoes.map((f, i) => (
                    <FeedbackQuestao feedbackQuestao={f} key={i}/>
                ))}
            </div>
            <div className="flex flex-col items-center gap-10 p-6">
                <h2 className="font-bold text-sky-500 text-center lg:text-2xl">Indicadores sobre a Eficiência Energética na sua Indústria</h2>
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-0">
                    {eficienciaEnergetica.eficienciaSetor.map((e, i) => (
                        <DashboardEficiencia eficiencia={e} key={i}/>
                    ))}
                </div>
                <div className="grid content-center gap-10 lg:gap-0">
                    {eficienciaEnergetica.eficienciaGeral && 
                        <DashboardEficiencia eficiencia={eficienciaEnergetica.eficienciaGeral}/>
                    }
                </div>
            </div>
        </section>
    )
}
