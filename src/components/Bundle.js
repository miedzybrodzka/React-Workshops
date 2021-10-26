import React from 'react';
import {Redirect} from 'react-router-dom';
import getUserName from './Authorization';
import useFetchTagBundle from "../queries/useFetchTagBundle";


const Bundle = () => {

    // const newBundle = () =>{
    
    //     const newText = window.prompt('');
    //     console.log(newText);

    // }

    const {data, loading, error} = useFetchTagBundle();
    console.log(data);

    if (loading) return <div>loading...</div>
    if (error) return <div>Error: </div>

    return (
        <React.Fragment>
            <div>
            <h1>My bundles:</h1>
            {!getUserName() && <Redirect to='/'/>}
            {data.map((singleBundle) => {
            return (
                <div>
                <span>{singleBundle.name}</span>
            </div>
            );
        })}
            </div>
        </React.Fragment>
    )
}

export default Bundle;