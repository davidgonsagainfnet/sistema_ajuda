import Dexie from "dexie";

export const db = new Dexie('systema-ajuda');

db.version(1).stores({
    usuario: '++uid, celular, documento, email, nomeRazaoSocial',
    vagas: '++uid, vaga, salario, telefone, descricao, beneficio',
});