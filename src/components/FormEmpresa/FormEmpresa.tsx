"use client"

export function FormEmpresa() {
    return (
        <>
            <div className="cad-empresa">
                <section className="inputs">
                    <div>
                        <p>Nome da Empresa</p>
                        <input className="border-white" type="text" name="" id="" placeholder="Ex: BE-Fore" />
                    </div>
                    <div>
                        <p>Localização da Empresa</p>
                        <input type="text" name="" id="" placeholder="Ex: SP" />
                    </div>
                    <div>
                        <p>Tipo</p>
                        <input type="text" name="" id="" placeholder="Ex: Industria automobilística" />
                    </div>
                </section>
                <button className="button">Avançar</button>
            </div>
        </>
    )
}