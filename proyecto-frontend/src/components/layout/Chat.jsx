import React from 'react';

function Chat(){

    function createData(name,image,lastMessage){
        return {name,image,lastMessage};
    }

    const contacts = [
        createData("Pedro","https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.hsi.es%2Fwp-content%2Fuploads%2F2020%2F03%2Fusuario.png&f=1&nofb=1","Buenas"),
        createData("Maxi","https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.flaticon.com%2Ficons%2Fpng%2F512%2F219%2F219970.png&f=1&nofb=1","KEKW"),
    ]

    return(
        <div className = "bg-gray-50 z-30 inset-y-0 left-0 xl:w-64 w-32 transition duration-300 transform overflow-y-auto lg:translate-x-0 lg:static lg:inset-0 border-r-1 border-gray-200">
            <h3 className = "justify-center text-xl mb-2 font-semibold text-gray-700 py-1 px-2">Contactos</h3>
            {contacts.map((contact) => (
                <div className = "flex items-center" key = {contact.name}>
                    <div className = "px-4 py-4 overflow-hidden">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                                <img className="h-10 w-10 rounded-full" src={contact.image} alt="" loading = "lazy"/>
                            </div>
                            <div className="ml-4">
                                <div className="text-sm leading-5 font-medium text-gray-900">
                                {contact.name}
                                </div>
                                <div className="text-sm leading-5 text-gray-500 overflow-hidden hidden xl:contents">{contact.lastMessage}</div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Chat;