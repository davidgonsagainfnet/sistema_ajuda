import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth'
import { DataModel } from '../data/datamodel';

const userIsLoggedIn = async (firebaseApp) => {
    const dataModel = new DataModel('usuario', firebaseApp);
    const user = await dataModel.getLocal();
    if(user.length > 0){
        return user[0]
    }
    return null;
}

const estaLogado = async (navigate, firebaseApp) => {
    const isLoggedIn = await userIsLoggedIn(firebaseApp);

    if(!isLoggedIn){
        navigate('/login')
    }
}

const confirmAccount = async (user) => {
    await sendEmailVerification(user);
}

const saveLogin = (firebaseApp, data) => {
    const dataModel = new DataModel('usuario', firebaseApp);
    //dataModel.createDbLocal(data, data.uid)
    dataModel.syncLoginInicial(data.uid)
}

const buscaVagasSaveLocal = (firebaseApp) => {
    const dataModel = new DataModel('vagas', firebaseApp);
    dataModel.syncVagasLocal()
}

const login = async (firebaseApp, data, navigate) => {
    try{
        const auth = getAuth(firebaseApp);
        const resposta = await signInWithEmailAndPassword(auth, data.email, data.password);
        const { email, displayName, emailVerified, photoURL, uid, accessToken } = resposta.user;

        if(emailVerified){
            saveLogin(firebaseApp, {email, displayName, photoURL, uid, accessToken});
            buscaVagasSaveLocal(firebaseApp);
            await new Promise(resolve => setTimeout(resolve, 1000));
            navigate('/');
        }else{
            alert("Você precisa confirmar seu e-mail.")
        }

    }catch(e){
        if(e.toString().indexOf('auth/invalid-email') > -1){
            alert('Dados de usuário inválidos.')
        }else if(e.toString().indexOf('auth/invalid-login-credentials') > -1){
            alert('Dados de usuário inválidos.')
        } else {
            alert(e.toString())
        }
  
    }
}

const restauraPassword = async (firebase, email) => {
    try{
        const config = getAuth(firebase)
        await sendPasswordResetEmail(config, email)
        alert('Link de recuperação enviado para o email ' + email)
    } catch(e){
        if(e.toString().indexOf('auth/invalid-email') > -1){
            alert('Dados de usuário inválidos.')
        }else{
            alert(e.toString())
        }
    }
}

const registrarUsuario = async (firebase, data, navigate) => {
    try {
        const auth = getAuth(firebase)
        const registrado = await createUserWithEmailAndPassword(auth, data.email, data.password)

        confirmAccount(registrado.user)

        const email           = data.email;
        const nomeRazaoSocial = data.nomeRazaoSocial;
        const celular         = data.celular;
        const documento       = data.documento;

        const {uid} = registrado.user;
        await sendDataBase(firebase,{email, nomeRazaoSocial, celular, documento, uid})
        alert('Usuario criado com sucesso, verifique sua conta de email.')
        navigate('/login')
    }catch(e){
        if(e.toString().indexOf('auth/invalid-email') > -1){
            alert('E-mail inválido.')
        }else if(e.toString().indexOf('auth/wrong-password') > -1){
            alert('Password Inválido.')
        }else if(e.toString().indexOf('auth/weak-password') > -1){
            alert('A senha precisa ter 6 ou mais caracteres.')
        }else{
            alert(e.toString())
        }
    }    
}

const sendDataBase = (firebase, usuario) => {
    const dataModel = new DataModel('usuario', firebase);
    dataModel.create(usuario);
}

const getUserLocal = async () => {
    const dataModel = new DataModel('usuario');
    const user = await dataModel.getLocal();
    return user[0];
}

export {estaLogado,
        login,
        restauraPassword,
        registrarUsuario,
        getUserLocal}