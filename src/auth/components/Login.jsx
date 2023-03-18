
export const Login = ({ loginSubmit, loginEmail, onLoginInputChange, loginPassword, isRegister }) => {
  return (
    <div className="col-md-6 login-form-1">
         <h3>Ingreso</h3>
         <form onSubmit={ loginSubmit }>
             <div className="form-group mb-2">
                 <input 
                     type="text"
                     className="form-control"
                     placeholder="Correo"
                     name="loginEmail"
                     value={ loginEmail }
                     onChange ={ onLoginInputChange }
                 />
             </div>
             <div className="form-group mb-2">
                 <input
                     type="password"
                     className="form-control"
                     placeholder="Contraseña"
                     name="loginPassword"
                     value={ loginPassword }
                     onChange ={ onLoginInputChange }
                 />
             </div>
             <div className="login-btn">
                 <input 
                     type="submit"
                     className="btnSubmit"
                     value="Login" 
                 />
             </div>
         </form>
         <div className="container">
            <div className="row justify-content-center align-items-center">
              <h5>¿No tenes cuenta? Hace click</h5>
              <button 
                className="btn btn-link mb-1 pl-2"
                onClick={ isRegister }
                >
                  aquí
              </button>
            </div>
         </div>
     </div>
  )
}
