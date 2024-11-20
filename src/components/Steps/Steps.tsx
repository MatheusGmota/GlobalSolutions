export default function Steps({passoAtual}: {passoAtual : number}) {
    const passos = ["Sobre a Empresa", "Questões Gerais", "Equipamentos", "Relatório Final"]
    return (
        <div className="flex justify-center p-6">
            <ul className="steps">
                {passos.map((s, i) => (
                    <li key={i} className={`text-white font-semibold text-sm w-28 lg:w-48 step ${passoAtual >= i + 1 ? 'step-accent' : " "}`}>{s}</li>
                ))}
            </ul>
        </div>
    )
}