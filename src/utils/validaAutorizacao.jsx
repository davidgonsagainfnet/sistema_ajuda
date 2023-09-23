import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

const estaLogado = async (navigate) => {
    // navigate('/login')
    navigate('/joblist')
    // navigate('/start')
}

const login = async (firebaseApp, data, navigate) => {
    try{
        const auth = getAuth(firebaseApp);
        const resposta = await signInWithEmailAndPassword(auth, data.email, data.password);
        const { emailVerified } = resposta.user;
        
        if(emailVerified){
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

export {estaLogado,
        login}