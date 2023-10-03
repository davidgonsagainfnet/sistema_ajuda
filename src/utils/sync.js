import { DataModel } from "../data/datamodel";
import { saveVagas } from "./vagas";

const sync = async (firebaseApp) => {
    if(window.navigator.onLine){
        sincronizarDados(firebaseApp);
    }
}

const sincronizarDados = async (firebaseApp) => {
    const dataModelVagas = new DataModel('usuario', firebaseApp, 'vagas', 'vagas');

    const vagas = await dataModelVagas.getLocal({ synced: false });

    console.log(vagas)

    if(vagas.length > 0){
        for(let vaga of vagas){
                    saveVagas(firebaseApp, vaga);
        }
    }
    
}

export {
    sync
}