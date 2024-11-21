"use client"
import { TipoEquipamento } from "@/types";
import { useState } from "react";

export default function FormularioEquipamento({ onSubmit }: { onSubmit: () => void }) {
    const [equipamento, setEquipamento] = useState<TipoEquipamento>({
        nomeEquipamento: "",
        setor: "",
        potencia: 0,
        quantidade: 0,
        horaOperacao: 0,
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const storedData = localStorage.getItem("infoEmpresa");
        const parsedData = storedData ? JSON.parse(storedData) : { respostas: [], equipamentos: [], producaoMensal: 0 };

        const updatedEquipamentos = [...parsedData.equipamentos, equipamento];

        localStorage.setItem("infoEmpresa", JSON.stringify({ ...parsedData, equipamentos: updatedEquipamentos }))

        setEquipamento({
            nomeEquipamento: "",
            setor: "",
            potencia: 0,
            quantidade: 0,
            horaOperacao: 0,
        })
        onSubmit()
    };

    return (
        <form onSubmit={handleSubmit} className="grid grid-cols-2 lg:grid-cols-[repeat(5,1fr)_3rem] gap-2 p-4">
            <fieldset>
                <label className="text-white text-sm lg:text-base font-semibold block mb-2">Setor do equipamento</label>
                <input
                    name="setor"
                    type="text"
                    placeholder="Ex: Escritório"
                    value={equipamento.setor}
                    className="input input-bordered input-primary text-sm w-full max-w-xs border-sky-800 focus-within:outline-none"
                    onChange={(e) => setEquipamento({ ...equipamento, setor: e.target.value })}
                    required
                />
            </fieldset>
            <fieldset>
                <label className="text-white text-sm lg:text-base font-semibold block mb-2">Nome do equipamento</label>
                <input
                    name="nomeEquipamento"
                    type="text"
                    placeholder="Ex: Ar-Condicionado Split"
                    value={equipamento.nomeEquipamento}
                    className="input input-bordered input-primary text-sm w-full max-w-xs border-sky-800 focus-within:outline-none"
                    onChange={(e) => setEquipamento({ ...equipamento, nomeEquipamento: e.target.value })}
                    required
                />
            </fieldset>
            <fieldset>
                <label className="text-white text-sm lg:text-base font-semibold block mb-2">Potência do equipamento</label>
                <input
                    name="potencia"
                    type="number"
                    placeholder="Ex: 1200"
                    value={equipamento.potencia || ""}
                    className="input input-bordered input-primary text-sm w-full max-w-xs border-sky-800 focus-within:outline-none"
                    onChange={(e) => setEquipamento({ ...equipamento, potencia: parseFloat(e.target.value) })}
                    required
                />
            </fieldset>
            <fieldset>
                <label className="text-white text-sm lg:text-base font-semibold block mb-2">Quantidade do equipamento</label>
                <input
                    name="quantidade"
                    type="number"
                    placeholder="Ex: 5"
                    value={equipamento.quantidade || ""}
                    className="input input-bordered input-primary text-sm w-full max-w-xs border-sky-800 focus-within:outline-none"
                    onChange={(e) => setEquipamento({ ...equipamento, quantidade: parseInt(e.target.value) })}
                    required
                />
            </fieldset>
            <fieldset>
                <label className="text-white text-sm lg:text-base font-semibold block mb-2">Horas em operação (mensal)</label>
                <input
                    name="horaOperacao"
                    type="number"
                    placeholder="Ex: 160"
                    value={equipamento.horaOperacao || ""}
                    className="input input-bordered input-primary text-sm w-full max-w-xs border-sky-800 focus-within:outline-none"
                    onChange={(e) => setEquipamento({ ...equipamento, horaOperacao: parseInt(e.target.value) })}
                    required
                />
            </fieldset>
            <fieldset className="col-span-2 lg:col-span-1 self-end">
                <button type="submit" className="w-full btn btn-square bg-sky-800 text-white">+</button>
            </fieldset>
        </form>
    );
}
