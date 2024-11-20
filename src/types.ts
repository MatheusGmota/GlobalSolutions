export type TipoFeedbackQuestao = {
    idQuestao: number;
    questao: string;
    resposta: string;
    feedback: string | null;
}

export type TipoEficiencia = {
    setor?: string;
    eficienciaEnergetica: number;
    consumoMensal: number;
    visaoGeral: string | null;
}

export interface InterfaceEficiencia {
    eficienciaSetor: TipoEficiencia[];
    eficienciaGeral: TipoEficiencia;
}