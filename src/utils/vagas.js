import { DataModel } from "../data/datamodel";
import { getUserLocal } from "./validaAutorizacao";

const saveVagas = async (firebaseApp, data) => {
    const dataModel = new DataModel('vagas', firebaseApp, 'vagas', 'vagas');

    const user = await getUserLocal();
    data.criado_por = user.uid;
    dataModel.create(data, true)
}

const loadVagas = async (firebaseApp, id = null) => {
    const dataModel = new DataModel('vagas', firebaseApp, 'vagas', 'vagas');
    let vagas = await dataModel.getLocal();
    if(id != null){
        vagas = vagas.filter(item => item.uid === id)
    }
    return vagas;
}

export {
    saveVagas,
    loadVagas
}