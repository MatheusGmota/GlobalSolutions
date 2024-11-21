'use client'
import { FormEmpresa } from '@/components/FormEmpresa/FormEmpresa'
import { FormQuestoes } from '@/components/FormQuestoes/FormQuestoes'
import Steps from '@/components/Steps/Steps'
import TemplateEficiencia from '@/components/TemplateEficiencia/TemplateEficiencia'
import TemplateEquipamento from '@/components/TemplateEquipamento/TemplateEquipamento'
import React, { useState } from 'react'

export default function Page() {
    const [passoAtual, setPassoAtual] = useState<number>(1)

    const components = [
        <FormEmpresa key={1} onSubmit={() => setPassoAtual(passoAtual + 1)} />, 
        <FormQuestoes key={2} onSubmit={() => setPassoAtual(passoAtual + 1)} />, 
        <TemplateEquipamento key={3} onSubmit={() => setPassoAtual(passoAtual + 1)} />, 
        <TemplateEficiencia key={4}/>
    ]

    return (
        <main className='main'>
                <Steps passoAtual={passoAtual} />

                <div className='flex flex-col items-center justify-center w-full px-2 py-4 bg-base-200'>
                    <div className='w-full'>
                        {components[passoAtual - 1]}
                    </div>
                </div>
        </main>
    )
}
