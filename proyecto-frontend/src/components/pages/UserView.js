import React, { useState } from 'react';
import PublishOutlinedIcon from '@material-ui/icons/PublishOutlined';
import axiosInstance from '../../util/Axios';
import path from 'path';
import IconButton from '@material-ui/core/IconButton';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import InsertDriveFileOutlinedIcon from '@material-ui/icons/InsertDriveFileOutlined';

const {dialog} = window.require('electron').remote;

function UserView() {

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
            <section className="absolute w-full top-0">
                <div className="container mx-auto px-4 h-full">
                    <div className="flex content-center items-center justify-center h-full">
                        <div className="w-1/2 lg:w-3/12 px-4 pt-28">
                            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-100 border-0">
                                <div className="rounded-t mb-0 px-6 py-6">
                                    <div className = "rounded-t mb-0 px-6 py-6">
                                        <div className = "flex-auto px-4 lg:px-10 pt-0">
                                            <form onSubmit = {submitFile}>
                                                <div className = "flex content-center items-center justify-center h-full mb-3">
                                                    <button onChange = {handleChange} onClick = {uploadFile}  type = "button">
                                                        <PublishOutlinedIcon style = {{fontSize:100, color:'#374151'}}/> 
                                                    </button>
                                                </div>
                                                <div className = "relative w-full mb-3">
                                                    <select onChange = {handleChange} type = "select" value = {values.receiver} className = "px-3 py-3 text-gray-700 bg-white border border-transparent rounded text-sm shadow focus:outline-none focus:shadow-outline w-full">
                                                        <option className = "text-gray-400" disabled defaultValue>Elegir contacto</option>
                                                        <option>Dueño</option>
                                                        <option>Co-Dueño</option>
                                                    </select>
                                                </div>
                                                <div className = "text-center mt-6">
                                                        <button onClick = {handleSubmit} className = "bg-indigo-500 text-white active:bg-indigo-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-75" type="submit">Enviar</button>
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
            <div className = "absolute bottom-10 left-10 lg:left-20">
                <IconButton size="large">
                    <AccountCircleOutlinedIcon fontSize = "large"/>
                </IconButton>
                <IconButton size="large">
                    <ChatOutlinedIcon fontSize = "large"/>
                </IconButton>
                <IconButton size="large">
                    <InsertDriveFileOutlinedIcon fontSize = "large"/>
                </IconButton>
            </div>
        </section>
    )
}

export default UserView;