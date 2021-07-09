const Validation = (values) => {
    let errors = {};

    if(!values.user){
        errors.user = "Usuario requerido."
    }
    if(!values.password){
        errors.password = "Contraseña requerida."
    }
    if(values.password !== values.passwordCheck){
        errors.passwordCheck = "Las contraseñas no son iguales."
    }
    return errors;
}

export default Validation;