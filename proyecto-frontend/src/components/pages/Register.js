import React, {useState,useContext} from 'react';
import {Link} from 'react-router-dom';
import axiosInstance from '../../util/Axios';
import Context from '../../util/Context';

function Register(){

    const {getLoggedIn} = useContext(Context);

    const [values,setValues] = useState({
        name:"",
        email:"",
        password:"",
        passwordCheck:""
    });

    const handleChange = e => {
        const {name,values} = e.target;
        setValues({...values,[name]:values});
    }

    const registerSubmit = async (e) =>{
        e.preventDefault()
        try{
            await axiosInstance.post('/register',{...values},{withCredentials:true});
            await getLoggedIn();
            window.location.href = '/';
        }catch(err){
            alert(err);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return(
        <section class="absolute w-full top-0">
            <div class="container mx-auto px-4 h-full">
                <div class="flex content-center items-center justify-center h-full">
                    <div class="w-full lg:w-4/12 px-4 pt-28">
                        <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-100 border-0">
                            <div class="rounded-t mb-0 px-6 py-6">
                                <div className = "rounded-t mb-0 px-6 py-6">
                                    <div className = "flex-auto px-4 lg:px-10 py-10 pt-0">
                                        <form onSubmit = {registerSubmit}>
                                            <div className = "relative w-full mb-3">
                                                <label className = "block uppercase text-gray-700 text-xs font-bold mb-2" for="grid-password">Nombre de organización</label>
                                                <input type="text" onChange = {handleChange} value = {values.user} className = "px-3 py-3 placeholder-gray-400 text-gray-700 bg-white border border-transparent rounded text-sm shadow focus:outline-none focus:shadow-outline w-full" placeholder="Nombre de organización"/>
                                            </div>
                                            <div className = "relative w-full mb-3">
                                                <label className = "block uppercase text-gray-700 text-xs font-bold mb-2" for="grid-password">Email</label>
                                                <input type="email" onChange = {handleChange} value = {values.email} className = "px-3 py-3 placeholder-gray-400 text-gray-700 bg-white border border-transparent rounded text-sm shadow focus:outline-none focus:shadow-outline w-full" placeholder="Email"/>
                                            </div>
                                            <div className = "relative w-full mb-3">
                                                <label className = "block uppercase text-gray-700 text-xs font-bold mb-2" for="grid-password">Contraseña</label>
                                                <input type="password" onChange = {handleChange} value = {values.password} className = "px-3 py-3 placeholder-gray-400 text-gray-700 bg-white border border-transparent rounded text-sm shadow focus:outline-none focus:shadow-outline w-full" placeholder="Contraseña"/>
                                            </div>
                                            <div className = "relative w-full mb-3">
                                                <label className = "block uppercase text-gray-700 text-xs font-bold mb-2" for="grid-password">Contraseña repetida</label>
                                                <input type="password" onChange = {handleChange} value = {values.passwordCheck} className = "px-3 py-3 placeholder-gray-400 text-gray-700 bg-white border border-transparent rounded text-sm shadow focus:outline-none focus:shadow-outline w-full" placeholder="Contraseña repetida"/>
                                            </div>
                                            <div>
                                                <label className = "inline-flex items-center cursor-pointer">
                                                    <input id="customCheckRegister" type="checkbox" className = "form-checkbox text-gray-800 ml-1 w-5 h-5"/><span className = "ml-2 text-sm font-semibold text-gray-700">Recordarme</span></label>
                                            </div>
                                            <div className = "text-center mt-6">
                                                <button onClick = {handleSubmit} className = "bg-gray-700 text-white active:bg-gray-100 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-75" type="button">Registrarse</button>
                                            </div>
                                            <div className = "text-center mt-4">
                                                <Link to = "/admin/panel"><p>¿Queres iniciar sesión?</p></Link>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Register;