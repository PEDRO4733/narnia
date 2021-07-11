import React from 'react';
import fs from 'fs';
import path from 'path'
import PublishOutlinedIcon from '@material-ui/icons/PublishOutlined';
const {dialog} = require("electron").remote;

function UserView() {

    const uploadFile = () => {
        dialog.showOpenDialog({
            title:"Elegir archivo",
            buttonLabel:"Subir",
            properties:["openFile"]   
        });
    }
    
    return(
        <section class="absolute w-full top-0">
            <div class="container mx-auto px-4 h-full">
                <div class="flex content-center items-center justify-center h-full">
                    <div class="w-1/2 lg:w-3/12 px-4 pt-28">
                        <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-100 border-0">
                            <div class="rounded-t mb-0 px-6 py-6">
                                <div className = "rounded-t mb-0 px-6 py-6">
                                    <div className = "flex-auto px-4 lg:px-10 pt-0">
                                        <div className = "flex content-center items-center justify-center h-full mb-3">
                                            <button onClick = {uploadFile}>
                                                <PublishOutlinedIcon style = {{fontSize:100}}/>
                                            </button>
                                        </div>
                                        <div className = "relative w-full mb-3">
                                            <select type = "select" className = "px-3 py-3 text-gray-700 bg-white border border-transparent rounded text-sm shadow focus:outline-none focus:shadow-outline w-full">
                                                <option className = "text-gray-400" disabled selected>Elegir contacto</option>
                                                <option>Dueño</option>
                                                <option>Co-Dueño</option>
                                            </select>
                                        </div>
                                        <div className = "text-center mt-6">
                                                <button className = "bg-indigo-500 text-white active:bg-indigo-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-75" type="button">Enviar</button>
                                        </div>
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

export default UserView;