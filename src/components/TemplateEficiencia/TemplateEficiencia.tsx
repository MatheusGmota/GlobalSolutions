import { useEffect, useRef, useState } from "react";
import DashboardEficiencia from "../DashboardEficiencia/DashboardEficiencia";
import FeedbackQuestao from "../FeedbackQuestao/FeedbackQuestao";
import { InterfaceEficiencia, TipoFeedbackQuestao } from "@/types";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { useRouter } from "next/navigation";


export default function TemplateEficiencia() {
    const navegacao = useRouter()

    const [feedbackQuestoes, setFeedbackQuestoes] = useState<TipoFeedbackQuestao[]>([])
    
    const [eficienciaEnergetica, setEficienciaEnergetica] = useState<InterfaceEficiencia>({
        eficienciaSetor: [],
        eficienciaGeral: {eficienciaEnergetica: 0,consumoMensal:0, visaoGeral: ""}
    })

    const pdfRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const chamadaApi = async () => {
            const id = localStorage.getItem("id")
            
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_URI}relatorio?id-empresa=${id}`);
                if (response.ok) {
                    const data = await response.json();
                    setFeedbackQuestoes(data.feedbackQuestoes)
                    setEficienciaEnergetica(data.eficienciaEnergetica)
                }
            } catch (e) {
                console.error(e);
            }
        }
        chamadaApi();
    }, [])

    const exportarPDF = async () => {
        try {
            if (!pdfRef.current) return;

            const canvas = await html2canvas(pdfRef.current); 
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF("p", "mm", "a4");
            const imgWidth = 210;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;

            pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
            pdf.save("relatorio.pdf");
        } catch (error) {
            console.error(error);
            navegacao.push("/planos")
        }
    };

    return (
        <section>
            <h2 className="font-bold text-sky-500 text-center lg:text-2xl">Relatório Geral e Sugestões</h2>
            <div ref={pdfRef}>
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
            <button onClick={exportarPDF} className="btn btn-primary">Exportar para PDF</button>
        </section>
    )
}
