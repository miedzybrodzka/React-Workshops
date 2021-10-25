import React from 'react';
import {Redirect} from 'react-router-dom';
import getUserName from './Authorization';


const Bundle = () => {
    return (
        <React.Fragment>
            {!getUserName() && <Redirect to='/'/>}
            <div>Bundle</div>
        </React.Fragment>
    )
}

export default Bundle;