import React, {useState} from 'react';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { Modal } from '@material-ui/core';
import axiosInstance from '../../util/Axios';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';

function Hierarchy() {

    const [open, setOpen] = useState(false);

    const [hierarchy,setHierarchy] = useState({
        name:""
    });

    let position = 0;

    function createData(position, name, members) {
      return { position, name, members };
    }

    const rows = [
        createData(position++,"Dueño",1),
        createData(position++,"Co-Dueño",2),
    ]


    const handleChange = e => {
        const {name,hierarchy} = e.target;
        setHierarchy({...hierarchy,[name]:hierarchy});
    }

    const hierarchySubmit = async (e) =>{
        e.preventDefault()
        try{
            await axiosInstance.post('/hierarchy',{...hierarchy},{withCredentials:true});
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

    return(
        <div className = "container mx-auto px-6 py-8">
            <h3 className="text-gray-700 text-3xl font-medium">Jerarquias</h3>
            <div className="mt-8"/>
                <div className = "flex flex-col mt-8">
                    <div className = "-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                        <div className = "flex content-center items-center justify-center h-full mb-3">
                            <button onClick = {handleOpen} className = " bg-indigo-500 text-white active:bg-indigo-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-75" type="button">Agregar Jerarquia</button>
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
                                                        <h3 className = "text-center font-semibold text-2xl mb-4 text-gray-700">Nueva jerarquia</h3>
                                                        <form onSubmit = {hierarchySubmit}>
                                                            <div className = "relative w-full mb-3">
                                                                <label className = "block uppercase text-gray-700 text-xs font-bold mb-2" for="grid-password">Nombre</label>
                                                                <input onChange = {handleChange} value = {hierarchy.name} type="text" className = "px-3 py-3 placeholder-gray-400 text-gray-700 bg-white border border-transparent rounded text-sm shadow focus:outline-none focus:shadow-outline w-full" placeholder="Nombre"/>
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
                                            Posicion
                                        </th>
                                        <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                            Nombre
                                        </th>
                                        <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                            Miembros
                                        </th>
                                        <th className="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
                                    </tr>
                                </thead>
                                <tbody className = "bg-white">
                                    {rows.map((row) => (
                                        <tr key = {row.position}>
                                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                                                {row.position}
                                            </td>
                                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                                                {row.name}
                                            </td>
                                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                <div className="text-sm leading-5 text-gray-900">{row.members}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                                                <button className = "w-full inline-flex justify-center rounded-md px-4 py-2 font-medium focus:ring-2 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm focus:ring-red-500 border border-transparent bg-white text-gray-700 hover:text-red-500">
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

export default Hierarchy;