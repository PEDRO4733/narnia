import React, {useState} from 'react';
import axiosInstance from '../../util/Axios';

import ReactSlider from "react-slider";

function Token(){

    const [value,setValue] = useState(0);

    const [tokens,setTokens] = useState({
        tokenQuantity: value,
        walletId:""
    });

    const handleChange = e => {
        const {name,tokens} = e.target;
        setTokens({...tokens,[name]:tokens});
    }

    const tokenSubmit = async (e) =>{
        e.preventDefault()
        try{
            await axiosInstance.post('/token',{...tokens},{withCredentials:true});
            window.location.href = '/';
        }catch(err){
            alert(err);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return(
        <div className = "container mx-auto px-6 py-8">
            <h3 className="text-gray-700 text-3xl font-medium">Tokens</h3>
            <div className="mt-6">
                <div className="flex flex-wrap -mx-6">
                    <div className="w-full px-6 sm:w-1/2 xl:w-1/3">
                        <div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
                            <div className="p-3 rounded-full bg-indigo-600 bg-opacity-75">

                            </div>   
                            <div className="mx-5">
                                <h4 className="text-2xl font-semibold text-gray-700">2</h4>
                                <div className="text-gray-500">Tokens disponibles</div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 sm:mt-0">
                        <div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
                            <div className="p-3 rounded-full bg-purple-300 bg-opacity-75">
                            
                            </div>
                            <div className="mx-5">
                                <h4 className="text-2xl font-semibold text-gray-700">200</h4>
                                <div className="text-gray-500">Tokens usados este mes</div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 xl:mt-0">
                        <div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
                            <div className="p-3 rounded-full bg-red-200 bg-opacity-75">
                            
                            </div>
                            <div className="mx-5">
                                <h4 className="text-2xl font-semibold text-gray-700">2</h4>
                                <div className="text-gray-500">Promedio por persona</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container mx-auto px-4 h-full">
                <div class="flex content-center items-center justify-center h-full">
                    <div class="w-full lg:w-1/2 px-4 pt-10 lg:pt-20">
                        <div class="relative flex flex-col min-w-0 break-words w-full shadow-lg rounded-lg bg-gray-100 border-0">
                            <div class="rounded-t mb-0 px-6 py-3">
                                <div className = "rounded-t mb-0 px-6 py-3">
                                    <div className = "flex-auto px-4 lg:px-10 py-5 pt-0">
                                        <form onSubmit = {tokenSubmit}>
                                            <div className = "relative w-full mb-4">
                                                <h4 className = "text-gray-700 text-2xl text-center font-bold">Agregar tokens</h4>
                                            </div>
                                            <div className = "relative w-full mb-1">
                                                <ReactSlider
                                                    step={1}
                                                    min={0}
                                                    max={75}
                                                    className="w-full h-3 pr-2 my-4 bg-white rounded-md cursor-grab"
                                                    thumbClassName="absolute w-5 h-5 cursor-grab bg-indigo-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 -top-2px"
                                                    value={value}
                                                    onChange={(value) => {
                                                        setValue(value)
                                                    }}
                                                />
                                            </div>
                                            <div className = "text-center text-xl relative w-full">
                                                <span>{value} tokens</span> 
                                            </div>
                                            <div className = "text-left mt-4">
                                                <label className = "block uppercase text-gray-700 text-xs font-bold mb-2 text-left" for="grid-password">Id de wallet</label>
                                                <input onChange = {handleChange} value = {tokens.walletId} type="text" className = "inline px-3 py-3 placeholder-gray-400 text-gray-700 bg-white border border-transparent rounded text-sm shadow focus:outline-none focus:shadow-outline mr-2 w-1/2" placeholder="Id de wallet"/>
                                                <button onClick = {handleSubmit} className = "inline bg-indigo-500 text-white active:bg-indigo-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-75" type="button">Agregar</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>        
        </div>
    )
}

export default Token;