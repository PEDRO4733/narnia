import React,{useState} from 'react';
import axiosInstance from '../../util/Axios';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { Modal } from '@material-ui/core';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';

function Accounts(){

    const [open, setOpen] = useState(false);

    const [account,setAccount] = useState({
        name: "",
        email:"",
        password:"",
        passwordCheck:"",
        hierarchy:""
    });

    const handleChange = e => {
        const {name,account} = e.target;
        setAccount({...account,[name]:account});
    }

    const accountSubmit = async (e) =>{
        e.preventDefault()
        try{
            await axiosInstance.post('/account',{...account},{withCredentials:true});
            window.location.href = '/admin/panel';
        }catch(err){
            alert(err);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };

    function createData(image,user,email, password, hierarchy) {
        return { image, user, email, password, hierarchy };
    }

    const rows = [
        createData("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.hsi.es%2Fwp-content%2Fuploads%2F2020%2F03%2Fusuario.png&f=1&nofb=1","Nombre","email@email.com","Contraseña","Dueño"),
        createData("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.flaticon.com%2Ficons%2Fpng%2F512%2F219%2F219970.png&f=1&nofb=1","Nombre","email@email.com","Contraseña","Co-Dueño"),
    ]

    return(
        <div className = "container mx-auto px-6 py-8">
            <h3 className="text-gray-700 text-3xl font-medium">Cuentas</h3>
            <div className="mt-8"/>
                <div className = "flex flex-col mt-8">
                    <div className = "-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                        <div className = "flex content-center items-center justify-center h-full mb-3">
                            <button onClick = {handleOpen} className = "bg-indigo-500 text-white active:bg-indigo-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-75" type="button">Agregar cuentas</button>
                        </div>
                        <Modal
                            onBackdropClick = {handleClose}
                            disableEnforceFocus
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="simple-modal-title"
                            aria-describedby="simple-modal-description"
                        >
                            <div class="container mx-auto px-4 h-full">
                                <div class="flex content-center items-center justify-center h-full">
                                    <div class="w-full lg:w-4/12 px-4 pt-28">
                                        <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-100 border-0">
                                            <div class="rounded-t mb-0 px-6 py-6">
                                                <div className = "rounded-t mb-0 px-6 py-3">
                                                    <div className = "flex-auto px-4 lg:px-10 py-5 pt-0">
                                                        <button className = "rounded-full flex items-center justify-center hover:bg-gray-200" onClick = {handleClose}>
                                                            <CloseOutlinedIcon/>
                                                        </button>
                                                        <h3 className = "text-center font-semibold text-2xl mb-4 text-gray-700">Nueva cuenta</h3>
                                                        <form onSubmit = {accountSubmit}>
                                                            <div className = "relative w-full mb-3">
                                                                <label className = "block uppercase text-gray-700 text-xs font-bold mb-2" for="grid-password">Nombre</label>
                                                                <input onChange = {handleChange} value = {account.name} type="text" className = "px-3 py-3 placeholder-gray-400 text-gray-700 bg-white border border-transparent rounded text-sm shadow focus:outline-none focus:shadow-outline w-full" placeholder="Nombre"/>
                                                            </div>
                                                            <div className = "relative w-full mb-3">
                                                                <label className = "block uppercase text-gray-700 text-xs font-bold mb-2" for="grid-password">Email</label>
                                                                <input onChange = {handleChange} value = {account.email} type="email" className = "px-3 py-3 placeholder-gray-400 text-gray-700 bg-white border border-transparent rounded text-sm shadow focus:outline-none focus:shadow-outline w-full" placeholder="Email"/>
                                                            </div>
                                                            <div className = "relative w-full mb-3">
                                                                <label className = "block uppercase text-gray-700 text-xs font-bold mb-2" for="grid-password">Jerarquia</label>
                                                                <select onChange = {handleChange} value = {account.hierarchy} type = "select" className = "px-3 py-3 text-gray-700 bg-white border border-transparent rounded text-sm shadow focus:outline-none focus:shadow-outline w-full">
                                                                    <option className = "text-gray-400" disabled defaultValue>Elegir jerarquia</option>
                                                                    <option>Dueño</option>
                                                                    <option>Co-Dueño</option>
                                                                </select>
                                                            </div>
                                                            <div className = "relative w-full mb-3">
                                                                <label className = "block uppercase text-gray-700 text-xs font-bold mb-2" for="grid-password">Contraseña</label>
                                                                <input onChange = {handleChange} value = {account.password} type="password" className = "px-3 py-3 placeholder-gray-400 text-gray-700 bg-white border border-transparent rounded text-sm shadow focus:outline-none focus:shadow-outline w-full" placeholder="Contraseña"/>
                                                            </div>
                                                            <div className = "relative w-full mb-3">
                                                                <label className = "block uppercase text-gray-700 text-xs font-bold mb-2" for="grid-password">Contraseña repetida</label>
                                                                <input onChange = {handleChange} value = {account.passwordCheck} type="password" className = "px-3 py-3 placeholder-gray-400 text-gray-700 bg-white border border-transparent rounded text-sm shadow focus:outline-none focus:shadow-outline w-full" placeholder="Contraseña repetida"/>
                                                            </div>
                                                            <div className = "text-center mt-6">
                                                                <button onClick = {handleSubmit} className = "bg-gray-700 text-white active:bg-gray-100 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-75" type="button">Crear</button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Modal>
                        <div className = "align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
                            <table className = "min-w-full">
                                <thead>
                                    <tr>
                                        <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                            Usuario
                                        </th>
                                        <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                            Contraseña
                                        </th>
                                        <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                            Jerarquia
                                        </th>
                                        <th className="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
                                    </tr>
                                </thead>
                                <tbody className = "bg-white">
                                    {rows.map((row) => (
                                        <tr key = {row.hierarchy}>
                                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0 h-10 w-10">
                                                        <img className="h-10 w-10 rounded-full" src={row.image} alt="" loading = "lazy"/>
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="text-sm leading-5 font-medium text-gray-900">
                                                            {row.user}
                                                        </div>
                                                        <div className="text-sm leading-5 text-gray-500">{row.email}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                                                {row.password}
                                            </td>
                                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                <div className="text-sm leading-5 text-gray-900">{row.hierarchy}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                                                <button className = "w-full inline-flex justify-center rounded-md px-4 py-2 font-medium sm:ml-3 sm:w-auto sm:text-sm border border-transparent bg-white text-gray-700 hover:text-red-500">
                                                    <DeleteOutlineIcon/>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Accounts;