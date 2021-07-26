import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import InsertDriveFileOutlinedIcon from '@material-ui/icons/InsertDriveFileOutlined';
import Chat from '../layout/Chat';
import Files from '../layout/Files';

function UserView() {

    const [page,setPage] = useState(0);

    return(
        <section>
            <div className = "absolute w-full top-0">
                <div class="container mx-auto px-4 h-full">
                    <div class="flex content-center items-center justify-center xl:w-full">
                        <div class="w-9/12 pt-28 h-3/4">
                            <div class="relative min-w-0 h-3/4 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-100 border-0">
                                <div class="rounded-t mb-0 px-6 py-6">
                                    {page === 0 && (
                                        <>
                                            <p>HOLA</p>
                                        </>
                                    )}
                                    {page === 1 && (
                                        <>
                                            <Chat/>
                                        </>
                                    )}
                                    {page === 2 && (
                                        <>
                                            <Files/>
                                        </>
                                    )}
                                </div>    
                            </div>        
                        </div>        
                    </div>
                </div>
            </div>
            <div className = "w-full bottom-10 absolute">
                <div className = "px-16 flex justify-center space-x-2">
                    <IconButton size="large" onClick = {() => setPage(0)}>
                        <AccountCircleOutlinedIcon fontSize = "large"/>
                    </IconButton>
                    <IconButton size="large" onClick = {() => setPage(1)}>
                        <ChatOutlinedIcon fontSize = "large"/>
                    </IconButton>
                    <IconButton size="large" onClick = {() => setPage(2)}>
                        <InsertDriveFileOutlinedIcon fontSize = "large"/>
                    </IconButton>
                </div>
            </div>
        </section>
    )
}

export default UserView;