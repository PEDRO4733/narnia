import React, { useState } from 'react';
import SupervisorAccountOutlinedIcon from '@material-ui/icons/SupervisorAccountOutlined';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import ChangeHistoryOutlinedIcon from '@material-ui/icons/ChangeHistoryOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import Accounts from '../layout/Accounts';
import Token from '../layout/Token';
import Hierarchy from '../layout/Hierarchy';

function AdminPanel(){

    const [page,setPage] = useState(0);

    return(
        <div className = "flex h-screen bg-gray-200">
            <div className = "z-30 inset-y-0 left-0 w-64 transition duration-300 transform bg-gray-700 overflow-y-auto lg:translate-x-0 lg:static lg:inset-0">
                <div className = "flex items-center justify-center mt-8">
                    <div className = "flex items-center">
                        <span className = "text-white text-2xl mx-2 font-semibold">Panel</span>
                    </div>
                </div>
                <nav className = "mt-10">
                    <a className = "flex items-center mt-4 py-2 px-6 hover:bg-gray-500 bg-opacity-25 text-gray-100" onClick = {() => setPage(0)}>
                        <SupervisorAccountOutlinedIcon/>
                        <span className = "mx-3">Cuentas</span>
                    </a>
                    <a className = "flex items-center mt-4 py-2 px-6 hover:bg-gray-500 bg-opacity-25 text-gray-100" onClick = {() => setPage(1)}>
                        <MonetizationOnOutlinedIcon/>
                        <span className = "mx-3">Tokens</span>
                    </a>
                    <a className = "flex items-center mt-4 py-2 px-6 hover:bg-gray-500 bg-opacity-25 text-gray-100" onClick = {() => setPage(2)}>
                        <ChangeHistoryOutlinedIcon/>
                        <span className = "mx-3">Jerarquias</span>
                    </a>
                    <a className = "flex items-center absolute bottom-10 mt-4 py-2 px-6 hover:bg-gray-500 bg-opacity-25 text-gray-100" href="/">
                        <ExitToAppOutlinedIcon/>
                        <span className = "mx-3">Cerrar Sesión</span>
                    </a>
                </nav>
            </div>
            <div className = "flex-1 flex flex-col overflow-hidden">
                <header className="flex justify-end items-center py-4 px-6 bg-white border-b-4 border-indigo-500">
                    <div className="flex items-center">
                        <h1 className = "text-gray-700 font-semibold text-2xl text-left">Nombre organización</h1>
                        <div className="relative">
                            <button className="flex mx-4 text-gray-600 focus:outline-none">
                                <img className="h-10 w-10 rounded-full" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frciminternet.com%2Fwp-content%2Fuploads%2F2019%2F04%2Fusuario.png&f=1&nofb=1" alt="" loading = "lazy"/>
                            </button>
                        </div>
                    </div>
                </header>
                <main className = "flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
                    {page === 0 && (
                        <>
                            <Accounts/>
                        </>
                    )}
                    {page === 1 && (
                        <>
                            <Token/>
                        </>
                    )}
                    {page === 2 && (
                        <>
                            <Hierarchy/>
                        </>
                    )}
                </main>
            </div>
        </div>
    )
}

export default AdminPanel;
