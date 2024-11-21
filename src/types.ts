export type TipoEmpresas = {
    idTipo: number;
    tipo: string;
}

export type TipoQuestoes = {
    idQuestao: number;
    questao: string;
}

export type TipoRespostas = {
    idQuestao: number;
    resposta: string;
}

export interface InterfaceTipoEmpresas {
    id: number;
    tipo: string;
}

export type TipoEmpresa = {
    idTipo: number;
    nome: string;
    local: string;
}
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

export type TipoInfoEmpresa = {
    respostas: TipoRespostas;
    equipamentos: TipoEquipamento[];
    producaoMensal: number;
}

export type TipoAluno = {
    img: string;
    nome: string;
    rm: string;
    turma: string;
    github: string;
    linkedin: string;
    instagram: string;
}