import React from 'react';
import OneEntry from './OneEntry';



const Entries = ({dataEntries, dataBundles, loading}) => {

    if(loading){
        return null;
    }
return (
    <React.Fragment>
     {dataEntries.map((elem, indx) => <OneEntry key={indx} elem={elem}  dataBundles={dataBundles}/>)}
    </React.Fragment>
)}

export default Entries;