import { getDatabase, set, ref } from "firebase/database";
import { db } from "./database";

export class DataModel{
    constructor(model, firebaseApp){
        this.model      = model;
        this.db         = db;
        this.realtimeDb = getDatabase(firebaseApp);
    }

    async create(data, saveLocal=false){
        set(ref(this.realtimeDb,`${this.model}/` + data.uid), data);
        if(saveLocal){
            await this.createDbLocal(data);
        }
    }

    async createDbLocal(data, id=null){
        if(id){
            await this.getDbTable(this.model).put({
                id: id,
                ...data
            });
        } else {
            await this.getDbTable(this.model).put(data);
        }
    }

    getDbTable(model){
        switch(model){
            case 'user':
                return this.db.usuario;
            default:
                return this.db.usuario;
        }
    }
}