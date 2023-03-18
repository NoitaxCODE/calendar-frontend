import { useEffect } from 'react';
import Swal from 'sweetalert2';
import { useAuthStore, useForm } from '../../hooks';
import { Login } from '../components/Login';
import { Register } from '../components/Register';
import './LoginPage.css';

const loginFormFields = {
    loginEmail: '',
    loginPassword: '',
}

const registerFormFields = {
    registerName: '',
    registerEmail: '',
    registerPassword: '',
    registerPassword2: '',
}

export const LoginPage = () => {

    const { startLogin, startRegister, errorMessage, isRegister, register } = useAuthStore();

    const { loginEmail, loginPassword, onInputChange:onLoginInputChange } = useForm( loginFormFields );
    const { registerName ,registerEmail, registerPassword, registerPassword2, onInputChange:onRegisterInputChange } = useForm( registerFormFields );

    const loginSubmit = ( event )=> {
        event.preventDefault();
        startLogin({ email: loginEmail, password: loginPassword });
    }

    const registerSubmit = ( event )=> {
        event.preventDefault();
        if( registerPassword !== registerPassword2 ) {
            Swal.fire('Error en registro', 'Contraseñas no son iguales', 'error')
            return;
        }
        startRegister({ name: registerName, email: registerEmail, password: registerPassword })
    }
    
    useEffect(() => {
        if( errorMessage !== undefined ){
            Swal.fire('Error en la autenticacion', errorMessage, 'error')
        }
    }, [ errorMessage ])
    
    return (
        <div className="container login-container">
            <div className="row justify-content-center align-items-center">
                {
                    register 
                    ? <Login    
                        loginSubmit={ loginSubmit } 
                        loginEmail={ loginEmail }
                        onLoginInputChange={ onLoginInputChange } 
                        loginPassword={ loginPassword } 
                        isRegister={ isRegister }
                        />
                    : <Register 
                        registerSubmit={ registerSubmit }
                        registerName= { registerName }
                        onRegisterInputChange={ onRegisterInputChange }
                        registerEmail={ registerEmail }
                        registerPassword={ registerPassword }
                        registerPassword2={ registerPassword2 }
                        />

                }
            </div>
        </div>
    )
}
