import React from 'react';
import {Redirect} from 'react-router-dom';
import getUserName from './Authorization';


const Settings = () => {
    return (
        <React.Fragment>
            {!getUserName() && <Redirect to='/'/>}
            <div>Ustawienia</div>
        </React.Fragment>
        
    )
}

export default Settings;