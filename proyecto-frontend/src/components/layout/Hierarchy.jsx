import React from 'react';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

function Hierarchy() {
    return(
        <div className = "container mx-auto px-6 py-8">
            <h3 className="text-gray-700 text-3xl font-medium">Jerarquias</h3>
            <div className="mt-8"/>
                <div className = "flex flex-col mt-8">
                    <div className = "-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
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
                                    <tr>
                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                                            1
                                        </td>
                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                                            Dueño
                                        </td>
                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                            <div className="text-sm leading-5 text-gray-900">1</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                                            <button className = "w-full inline-flex justify-center rounded-md px-4 py-2 font-medium focus:ring-2 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm focus:ring-red-500 border border-transparent bg-white text-gray-700 hover:text-red-500">
                                                <DeleteOutlineIcon/>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                                            2
                                        </td>
                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                                            Co-Dueño
                                        </td>
                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                            <div className="text-sm leading-5 text-gray-900">2</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                                            <button className = "w-full inline-flex justify-center rounded-md px-4 py-2 font-medium focus:ring-2 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm focus:ring-red-500 border border-transparent bg-white text-gray-700 hover:text-red-500">
                                                <DeleteOutlineIcon/>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>    
                </div>
        </div>
    )
}

export default Hierarchy;