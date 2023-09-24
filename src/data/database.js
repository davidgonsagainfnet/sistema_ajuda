import Dexie from "dexie";

export const db = new Dexie('systema-ajuda');

db.version(1).stores({
    usuario: '++uid, email, formnomeRazaoSocial'
});