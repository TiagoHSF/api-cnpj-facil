export class DataCnpjDTO {
    cnpj_raiz: string;
    razao_social: string;
    capital_social: string;
    responsavel_federativo: string;
    atualizado_em: Date;
    porte: object;
    natureza_juridica: object;
    qualificacao_do_responsavel: object;
    socios: object[];
}
