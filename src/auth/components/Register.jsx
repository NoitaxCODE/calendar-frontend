

export const Register = ({ registerSubmit, registerName, onRegisterInputChange, registerEmail, registerPassword, registerPassword2 }) => {
  return (
    <div className="col-md-6 login-form-2">
    <h3>Registro</h3>
    <form onSubmit={ registerSubmit }>
        <div className="form-group mb-2">
            <input
                type="text"
                className="form-control"
                placeholder="Nombre"
                name="registerName"
                value={ registerName }
                onChange ={ onRegisterInputChange }
            />
        </div>
        <div className="form-group mb-2">
            <input
                type="email"
                className="form-control"
                placeholder="Correo"
                name="registerEmail"
                value={ registerEmail }
                onChange ={ onRegisterInputChange }
            />
        </div>
        <div className="form-group mb-2">
            <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
                name="registerPassword"
                value={ registerPassword }
                onChange ={ onRegisterInputChange } 
            />
        </div>

        <div className="form-group mb-2">
            <input
                type="password"
                className="form-control"
                placeholder="Repita la contraseña" 
                name="registerPassword2"
                value={ registerPassword2 }
                onChange ={ onRegisterInputChange }
            />
        </div>

        <div className="login-btn">
            <input 
                type="submit" 
                className="btnSubmit" 
                value="Crear cuenta" />
        </div>
    </form>
    </div>
  )
}
