'use client'
import Steps from '@/components/Steps/Steps'
import React, { useState } from 'react'

export default function Page() {
    const [passoAtual, setPassoAtual] = useState<number>(1)

    const components = []

    return (
        <main>
            <Steps passoAtual={passoAtual} />
            {components[passoAtual - 1]}
            <div className='flex w-full justify-between p-4'>
                {passoAtual != 1 &&
                    <button 
                        className='btn btn-ghost text-white' 
                        onClick={()=> setPassoAtual(passoAtual-1)}>
                        Voltar
                    </button>
                }
                <button className='btn btn-active text-white' onClick={()=> setPassoAtual(passoAtual+1)}>
                    {passoAtual !== 3 ? "Avançar" : "Gerar Relatório"}
                </button>
            </div>
        </main>
    )
}
