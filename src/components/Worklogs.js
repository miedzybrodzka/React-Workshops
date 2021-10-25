import React, {useState} from 'react';
import Queries from './Graphql';
import {useQuery} from '@apollo/client';
import getUserName from './Authorization';


const Worklogs = (props) => {
    const day = new Date(props.date.getTime() - props.date.getTimezoneOffset()*60*1000);
    const actualDate = day.toISOString().replace(/\T(.*)/, "T00:00:00.000Z");
    const  { loading, error, data } = useQuery(Queries.GET_ENTRIES_FOR_DATE, {variables: {date: actualDate}, context: {headers: {"user-name": getUserName()}}});
    const lastElement = data?.entryMany?.length-1;
 //console.log(data);
    return(
        <div className='wrap'>
              {data?.entryMany?.map((elem, indx) => <div key={indx}>
                <div className='record'>
                    <input  type='text' value={elem.startTime}/>
                    <input className='rightInput' type='text' value={elem.endTime}/>
                    <select className='selectInput' >
                        <option>{elem.tag.tagBundle.name}</option>
                    </select>
                    <input  type='text'/>
                    <div className='buttonWrap'>
                        <button className='addButton'>+</button>
                        <button className='removeButton'>-</button>
                    </div>
                </div>
                </div>)}
                <div className='record'>
                    <input  type='text' value={data?.entryMany?.[lastElement]?.endTime || ''} /> 
                    <input className='rightInput' type='text' onChange={''}/>
                    <select className='selectInput'>
                        <option> </option>
                    </select>
                    <input  type='text' />
                    <div className='buttonWrap'>
                        <button className='addButton'>+</button>
                        <button className='removeButton'>-</button>
                    </div>
                </div>
          
        </div>
    )

}

export default Worklogs;