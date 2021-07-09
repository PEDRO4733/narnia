import React from 'react';
import {Link} from 'react-router-dom';

function Landing(){
    return(
            <div class="min-h-screen antialiased px-4 py-4 flex flex-col justify-center sm:py-12 overflow-hidden">
                <div class="relative py-2 sm:max-w-xl mx-auto text-center">
                    <div>
                        <h1 className = "justify-center text-6xl font-semibold mb-8">
                            Scriptum
                        </h1>
                        <div className = "m-4 inline">
                            <Link to = "/register">
                                <button className = "text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 focus:ring-indigo-500 w-full inline-flex justify-center rounded-md shadow-sm px-4 py-2 font-medium focus:ring-2 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm">
                                    Registrarse
                                </button>
                            </Link>
                        </div>
                        <div className = "m-4 inline">
                            <Link to = "/login">
                                <button className = "text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 focus:ring-indigo-500 w-full inline-flex justify-center rounded-md shadow-sm px-4 py-2 font-medium focus:ring-2 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm">
                                    Iniciar Sesión
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Landing;