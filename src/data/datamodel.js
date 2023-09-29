import { getDatabase, set, ref } from "firebase/database";
import { db } from "./database";

export class DataModel{
    constructor(model, firebaseApp, modelSufix=null, databaseName=null){
        this.model      = model;
        this.db         = db;
        this.realtimeDb = getDatabase(firebaseApp);
    }

    async create(data, saveLocal=false){
        data.uid = await this.generateUid();
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

    async getLocal(condition=null){
        let result = null;
        if(condition){
            result = await this.getDbTable(this.databaseName).toArray()
            for(let key of Object.keys(condition)){
                result = result.filter((item) => item[key] === condition[key]);
            }
            return result;
        }
        return await this.getDbTable(this.databaseName).toArray();
    }

    async generateUid(){
        let dt = new Date().getTime();
        let uuid = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            let r = (dt + Math.random()*16)%16 | 0;
            dt = Math.floor(dt/16);
            return (c=='x' ? r :(r&0x3|0x8)).toString(16);
        });

        return uuid;
    }

}