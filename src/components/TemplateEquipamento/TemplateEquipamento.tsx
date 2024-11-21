import { useState } from "react";
import FormularioEquipamento from "../FormularioEquipamento/FormularioEquipamento";
import TabelaEquipamentos from "../TabelaEquipamentos/TabelaEquipamentos";
import { TipoEquipamento, TipoInfoEmpresa } from "@/types";

export default function TemplateEquipamento({ onSubmit }: { onSubmit: () => void }) {

    const [equipamentos, setEquipamentos] = useState<TipoEquipamento[]>([])

    const handleEquipamentos = async () => {
        const storedData = localStorage.getItem("infoEmpresa");
        if (storedData) {
            const infoEmpresa = JSON.parse(storedData) as TipoInfoEmpresa
            const equipamentos = infoEmpresa.equipamentos
            setEquipamentos(equipamentos)
        }
    }

    const handleSubmit = async () => {
        const infoEmpresa = localStorage.getItem("infoEmpresa")
        
        try {
            const response = await fetch("", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(infoEmpresa)
            })
            if (response.ok) {
                localStorage.removeItem("infoEmpresa")
                onSubmit()
            }

        } catch (erro) {
            console.error(erro);
        }

    }

    return (
        <>
            <div className="p-4">
                <h2 className="text-white text-center text-2xl lg:text-4xl my-2">Equipamentos</h2>
                <p className="text-sm/5 lg:text-base my-2">Preencha os campos sobre as características dos equipamentos de cada setor da sua empresa</p>
            </div>
            <FormularioEquipamento onSubmit={(()=> handleEquipamentos())} />
            <TabelaEquipamentos equipamentos={equipamentos} onDelete={() => handleEquipamentos()} />
            <div className="mt-4 px-4 lg:flex lg:justify-end">
                <button onClick={handleSubmit} className="btn bg-sky-800 text-white w-full lg:w-auto">Gerar Relatório</button>
            </div>
        </>
    )
}
