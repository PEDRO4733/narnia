import React, {useContext} from 'react';
import {Switch,Route} from 'react-router-dom';
import Context from '../../util/Context';
import Login from './Login';
import Register from './Register';
import Landing from './Landing';
import AdminPanel from './AdminPanel';

function Pages(){

    const {loggedIn,isAdmin} = useContext(Context);

    return(
        <Switch>
            {loggedIn === false && (
                <>
                    <Route exact path = "/" component = {Landing}/>
                    <Route exact path = "/login" component = {Login}/>
                    <Route exact path = "/register" component = {Register}/>
                    <Route exact path = "/admin/panel" component = {AdminPanel}/>
                </>
            )}
            {loggedIn === true &&(
                <>
                    {isAdmin === true && (
                        <>
                            
                        </>
                    )}
                    {isAdmin === false && (
                        <>
                            
                        </>
                    )}
                </>
            )}
        </Switch>
    )
}

export default Pages;