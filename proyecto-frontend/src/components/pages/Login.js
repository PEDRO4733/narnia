import React, {useState,useContext} from 'react';
import {Link} from 'react-router-dom';
import axiosInstance from '../../util/Axios';
import Context from '../../util/Context';

function Login(){

    const {getLoggedIn} = useContext(Context);

    const [values,setValues] = useState({
        email:"",
        password:""
    });

    const handleChange = e => {
        const {name,values} = e.target;
        setValues({...values,[name]:values});
    }

    const loginSubmit = async (e) =>{
        e.preventDefault()
        try{
            await axiosInstance.post('/login',{...values},{withCredentials:true});
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
                                        <form onSubmit = {loginSubmit}>
                                            <div className = "relative w-full mb-3">
                                                <label className = "block uppercase text-gray-700 text-xs font-bold mb-2" for="grid-password">Email</label>
                                                <input type="text" onChange = {handleChange} value = {values.email} className = "px-3 py-3 placeholder-gray-400 text-gray-700 bg-white border border-transparent rounded text-sm shadow focus:outline-none focus:shadow-outline w-full" placeholder="Email"/>
                                            </div>
                                            <div className = "relative w-full mb-3">
                                                <label className = "block uppercase text-gray-700 text-xs font-bold mb-2" for="grid-password">Contraseña</label>
                                                <input type="password" onChange = {handleChange} value = {values.password} className = "px-3 py-3 placeholder-gray-400 text-gray-700 bg-white border border-transparent rounded text-sm shadow focus:outline-none focus:shadow-outline w-full" placeholder="Contraseña"/>
                                            </div>
                                            <div>
                                                <label className = "inline-flex items-center cursor-pointer">
                                                    <input id="customCheckLogin" type="checkbox" className = "form-checkbox text-gray-800 ml-1 w-5 h-5"/><span className = "ml-2 text-sm font-semibold text-gray-700">Recordarme</span></label>
                                            </div>
                                            <div className = "text-center mt-6">
                                                <button onClick = {handleSubmit} className = "bg-gray-700 text-white active:bg-gray-100 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-75" type="button">Iniciar Sesión</button>
                                            </div>
                                            <div className = "text-center mt-4">
                                                <Link to = "/register"><p>¿Queres registrarte?</p></Link>
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

export default Login;