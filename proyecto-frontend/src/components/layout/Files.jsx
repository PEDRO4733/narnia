import React, {useState} from 'react';
import PublishOutlinedIcon from '@material-ui/icons/PublishOutlined';
import axiosInstance from '../../util/Axios';
import path from 'path';

const {dialog} = window.require('electron').remote;

function Files(){
    const [values,setValues] = useState({
        file:"",
        receiver:""
    });

    const handleChange = e => {
        const {name,values} = e.target;
        setValues({...values,[name]:values});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    global.filepath = undefined;

    const uploadFile = () => {
        if(process.platform !== 'darwin'){
            dialog.showOpenDialog({
                title: 'Elegi un archivo para subir',
                defaultPath: path.join(__dirname, '../'),
                buttonLabel: 'Subir',
                properties: ['openFile']
            }).then(file => {
                console.log(file.canceled);
                if (!file.canceled) {
                  global.filepath = file.filePaths[0].toString();
                  console.log(global.filepath);
                }  
            }).catch(err => {
                console.log(err)
            });
        }else{
            dialog.showOpenDialog({
                title: 'Elegi un archivo para subir',
                defaultPath: path.join(__dirname, '../'),
                buttonLabel: 'Subir',
                properties: ['openFile', 'openDirectory']
            }).then(file => {
                console.log(file.canceled);
                if (!file.canceled) {
                  global.filepath = file.filePaths[0].toString();
                  console.log(global.filepath);
                }  
            }).catch(err => {
                console.log(err)
            });
        }
    }

    const submitFile = async () => {
        try{
            await axiosInstance.post('/files',{...values},{withCredentials:true});
            window.location.href = '/user/view';
        }catch(err){
            alert(err);
        }
    }
    
    return(
        <section>
            <div className = "flex-auto px-4 lg:px-10 pt-0">
                <form onSubmit = {submitFile}>
                    <div className = "flex content-center items-center justify-center h-full mb-3">
                        <button onChange = {handleChange} onClick = {uploadFile}  type = "button">
                            <PublishOutlinedIcon style = {{fontSize:100, color:'#374151'}}/> 
                        </button>
                    </div>
                    <div className = "w-full mb-3 flex content-center items-center justify-center">
                        <select onChange = {handleChange} type = "select" value = {values.receiver} className = "w-1/2 lg:w-1/4 px-3 py-3 text-gray-700 bg-white border border-transparent rounded text-sm shadow focus:outline-none focus:shadow-outline">
                            <option className = "text-gray-400" defaultValue>Elegir contacto</option>
                            <option>Dueño</option>
                            <option>Co-Dueño</option>
                        </select>
                    </div>
                    <div className = "text-center mt-6">
                        <button onClick = {handleSubmit} className = "bg-indigo-500 text-white active:bg-indigo-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-75" type="submit">Enviar</button>
                    </div>
               </form>
               <hr className = "mt-3 mb-2"/>
               <h3 className = "font-medium text-xl text-gray-700">Archivos Recibidos</h3>
               <div className = "container mx-auto px-6 py-8">
                    <div className = "flex overflow-y-scroll w-full h-1/2">
                        <div className = "mb-1 bg-white px-1 py-1 rounded-sm w-1/2 lg:w-1/3 mr-2">
                            <h6 className = "block">Nombre del que envio</h6>
                            <span className = "text-blue-500 inline font-light overflow-hidden">Nombre del archivo</span>
                            <span className = "inline ml-5">Hora</span>
                        </div>
                        <div className = "mb-1 bg-white px-1 py-1 rounded-sm w-1/2 lg:w-1/3 mr-2">
                            <h6 className = "block">Nombre del que envio</h6>
                            <span className = "text-blue-500 inline font-light overflow-hidden">Nombre del archivo</span>
                            <span className = "inline ml-5">Hora</span>
                        </div>
                        <div className = "mb-1 bg-white px-1 py-1 rounded-sm w-1/2 lg:w-1/3 mr-2">
                            <h6 className = "block">Nombre del que envio</h6>
                            <span className = "text-blue-500 inline font-light overflow-hidden">Nombre del archivo</span>
                            <span className = "inline ml-5">Hora</span>
                        </div>
                    </div>
               </div>
            </div>
        </section>
    )
}

export default Files;