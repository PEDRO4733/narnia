import React , {createContext,useEffect,useState} from 'react';
import axiosInstance from './Axios';

const Context = createContext();

function ContextProvider(props){
    const [loggedIn,setLoggedIn] = useState(false);
    const [isAdmin,setAdmin] = useState(false);

    async function getLoggedIn(){
        const loggedInRes = await axiosInstance.get('/loggedIn',{withCredentials:true});
        setLoggedIn(loggedInRes.data);
    }

    async function getRole(){
        const isAdminRes = await axiosInstance.get('/role',{withCredentials:true});
        if(isAdminRes.data === "ROLE_SELLER"){
            setAdmin(true);
        }
    }

    useEffect(()=>{
        getLoggedIn();
        getRole();
    },[]);

    return(
        <Context.Provider value = {{isAdmin,getRole,loggedIn,getLoggedIn}}>
            {props.children}
        </Context.Provider>
    )
}

export default Context;
export {ContextProvider};