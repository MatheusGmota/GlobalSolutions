import { TipoPlano } from "@/types";
import Link from "next/link";

const beneficios = {
    "Simples": ["Apenas 5 exportações mensais", "Relatórios simples", "Suporte via e-mail com tempo de resposta de até 24 horas"],
    "Premium": ["Exportações ilimitadas", "Relatórios detalhados incluindo análises preditivas com IA", "Suporte Premium (e-mail e chat com tempo de resposta prioritário de até 4 horas)", "Acesso permanente a todos os relatórios"]
}

export default function CardPlano({plano} : {plano: TipoPlano}) {
    return (
        <div
            className={`
                ${plano.tipo === "Premium" ? 'relative bg-gray-900 shadow-2xl' : 'bg-white sm:mx-8 lg:mx-0'}
                ${plano.idPlano === 1 ? 'rounded-t-3xl sm:rounded-b-none lg:rounded-bl-3xl lg:rounded-tr-none' 
                    : 'sm:rounded-t-none lg:rounded-t-3xl'}
                shadow-lg rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10`}
        >
            <h3 className="text-indigo-600 text-base/7 font-semibold">
                {plano.tipo}
            </h3>
            <p className={`${plano.tipo === "Premium" ? "text-white" : "text-gray-900"} mt-4 flex items-baseline gap-x-2`}>
                <span className="text-2xl self-stretch font-semibold tracking-tight">R$</span>
                <span className="text-5xl font-semibold tracking-tight">
                    {plano.valorMensal}
                </span>
                <span className={`${plano.tipo === "Premium" ? "text-white" : "text-gray-900"}text-base`}>/mês</span>
            </p>
            <div>
                <ul className="mt-8 space-y-3 text-sm/6 sm:mt-10">
                    {beneficios[plano.tipo].map((b, i) => (
                        <li key={i}  className={`
                            ${plano.tipo === "Premium" ? "text-white" : "text-gray-900"} flex gap-x-3 `}>
                            - {b}
                        </li>
                    ))}
                </ul>
            </div>            
            <Link href="" className={`
                ${plano.tipo === "Premium" ? 'bg-indigo-500 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-indigo-500'
                : ' bg-indigo-600  text-white ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 focus-visible:outline-indigo-600'}
                mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10`
            }>
                Comece já
            </Link>
        </div>
    )
}