import { TipoEquipamento } from "@/types";

export default function TabelaEquipamentos({equipamentos, onDelete}: {equipamentos: TipoEquipamento[], onDelete: () => void }) {

    const handleDelete = (index: number) => {
        const updatedEquipamentos = equipamentos.filter((_, i) => i !== index);
 
        const storedData = localStorage.getItem("infoEmpresa");
        if (storedData) {
             const parsedData = JSON.parse(storedData);
             parsedData.equipamentos = updatedEquipamentos;
             localStorage.setItem("infoEmpresa", JSON.stringify(parsedData));
        }
        onDelete()
    }

    return (
        <div className="overflow-x-auto px-4 lg:mt-4 h-96 scroll">
            <table className="table table-pin-rows">
                <thead>
                    <tr className="text-base border-sky-800 shadow-lg">
                        <th>Setor do equipamento</th>
                        <th>Nome do equipamento</th>
                        <th>Potência do equipamento</th>
                        <th>Quantidade do equipamento</th>
                        <th>Horas em operação (mensal)</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {equipamentos.map((e, i) => (
                        <tr className="hover" key={i}>
                            <td>{e.setor}</td>
                            <td>{e.nomeEquipamento}</td>
                            <td>{e.potencia}</td>
                            <td>{e.quantidade}</td>
                            <td>{e.horaOperacao}</td>
                            <td className="link font-semibold text-red-600" onClick={() => handleDelete(i)}>Excluir</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
