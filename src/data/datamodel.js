import { getDatabase, set, ref, get } from "firebase/database";
import { db } from "./database";

export class DataModel{
    constructor(model, firebaseApp, modelSufix=null, databaseName=null){
        this.model      = model;
        this.databaseName = databaseName || model;
        this.db         = db;
        this.realtimeDb = getDatabase(firebaseApp);
    }

    async create(data, saveLocal=false){
        if (data.uid === undefined) {
            data.uid = await this.generateUid();
        }
        set(ref(this.realtimeDb,`${this.model}/` + data.uid), data);
        if(saveLocal){
            await this.createDbLocal(data);
        }
    }

    async syncLoginInicial(uid){
        const data = await get(ref(this.realtimeDb, `${this.model}/` + uid))
        this.createDbLocal(data.val())
    }

    async syncVagasLocal(){
        const data = await get(ref(this.realtimeDb, `${this.model}`))
        const keyValueArray = Object.entries(data.val());
        keyValueArray.forEach(([key, value]) => {
            this.createDbLocal(value)
        });
        // this.createDbLocal(data.val())
    }

    async createDbLocal(data, id=null){
        if(id){
            await this.getDbTable(this.databaseName).put({
                id: id,
                ...data
            });
        } else {
            await this.getDbTable(this.databaseName).put(data);
        }
    }

    getDbTable(database){
        if(database === 'usuario'){
            return this.db.usuario;
        }
        else if(database === 'vagas'){
            return this.db.vagas;
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