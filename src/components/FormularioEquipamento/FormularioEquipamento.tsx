export default function FormularioEquipamento() {
    return (
        <form className="grid grid-cols-2 lg:grid-cols-[repeat(5,1fr)_3rem] gap-2 p-4">
            <fieldset>
                <label className="text-white text-sm lg:text-base font-semibold block mb-2">Setor do equipamento</label>
                <input
                    type="text"
                    placeholder="Ex: Escritório"
                    className="input input-bordered input-primary text-sm w-full max-w-xs border-sky-800 focus-within:outline-none" />
            </fieldset>
            <fieldset>
                <label className="text-white text-sm lg:text-base font-semibold block mb-2">Nome do equipamento</label>
                <input
                    type="text"
                    placeholder="Ex: Ar-Condicionado Split"
                    className="input input-bordered input-primary text-sm w-full max-w-xs border-sky-800 focus-within:outline-none" />
            </fieldset>
            <fieldset>
                <label className="text-white text-sm lg:text-base font-semibold block mb-2">Potência do equipamento</label>
                <input
                    type="number"
                    placeholder="Ex: 1200"
                    className="input input-bordered input-primary text-sm w-full max-w-xs border-sky-800 focus-within:outline-none" />
            </fieldset>
            <fieldset>
                <label className="text-white text-sm lg:text-base font-semibold block mb-2">Quantidade do equipamento</label>
                <input
                    type="number"
                    placeholder="Ex: 5"
                    className="input input-bordered input-primary text-sm w-full max-w-xs border-sky-800 focus-within:outline-none" />
            </fieldset>
            <fieldset>
                <label className="text-white text-sm lg:text-base font-semibold block mb-2">Horas em operação (mensal)</label>
                <input
                    type="number"
                    placeholder="Ex: 160"
                    className="input input-bordered input-primary text-sm w-full max-w-xs border-sky-800 focus-within:outline-none" />
            </fieldset>
            <fieldset className="col-span-2 lg:col-span-1 self-end">
                <button className="w-full btn btn-square bg-sky-800 text-white">+</button>
            </fieldset>
        </form>
    )
}
