"use client"

import { FormEmpresa } from "@/components/FormEmpresa/FormEmpresa"
import { useEffect, useState } from "react"

export default function Formulario() {

    const [passo, setPasso] = useState<number>(1)

    return(
        <main>
            <FormEmpresa/>
        </main>
    )

    // useEffect(() =>{
    //     if(orc){
    //         setPasso(2)
    //     }
    // }, [orc])
    
    // if (passo === 1) {
    //     return (
    //         <FormOrcamento />
    //     )
    // } else if (passo === 2) {
    //     return (
    //         <OrcamentoDashboard/>
    //     )
    // }
}