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

export type TipoEquipamento = {
    idEquipamento?: number;
    nomeEquipamento: string;
    setor: string;
    potencia: number;
    quantidade: number;
    horaOperacao: number;
}