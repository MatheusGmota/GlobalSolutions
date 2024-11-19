import FormularioEquipamento from "../FormularioEquipamento/FormularioEquipamento";
import TabelaEquipamentos from "../TabelaEquipamentos/TabelaEquipamentos";

export default function TemplateEquipamento() {
    return (
        <div>
            <div className="p-4">
                <h2 className="text-white text-center text-2xl lg:text-4xl my-2">Equipamentos</h2>
                <p className="text-sm/5 lg:text-base my-2">Preencha os campos sobre as características dos equipamentos de cada setor da sua empresa</p>
            </div>
            <div>
                <FormularioEquipamento/>
                <TabelaEquipamentos/>
            </div>
        </div>
    )
}
