import React, {useState, useEffect} from 'react';
import Queries from './Graphql';
import Mutations from './Graphql/Mutations';
import {useQuery, useMutation} from '@apollo/client';
import getUserName from './Authorization';
import Entries from './Entry';




const Worklogs = (props) => {
    const day = new Date(props.date.getTime() - props.date.getTimezoneOffset()*60*1000);
    const actualDate = day.toISOString().replace(/\T(.*)/, "T00:00:00.000Z");
    const  { loading, error, data } = useQuery(Queries.GET_ENTRIES_FOR_DATE, {variables: {date: actualDate}, context: {headers: {"user-name": getUserName()}}});
    const  objct = useQuery(Queries.GET_PROFILE, {context: {headers: {"user-name": getUserName()}}});
    const  [createEntry, obj] = useMutation(Mutations.CREATE_ENTRY,
        {refetchQueries: [
            Queries.GET_ENTRIES_FOR_DATE,
            'getEntriesForDate'
        ]});
    
    const newEntryObj = {tagBundleName:'', tagName:'', startTime: '', endTime: ''}
    const [newEntry, setNewEntry] = useState(newEntryObj);
    console.log(newEntry);

    useEffect(() => {
        const lastElement = data?.entryMany?.length-1;
        let lastElementStartTime = data?.entryMany?.[lastElement]?.endTime;
        console.log({lastElementStartTime});
        setNewEntry({
            ...newEntry,
            startTime: lastElementStartTime
        })
    
    },[data]);


   

    const addEntrie = () => {
        if(newEntry.tagBundleName && newEntry.tagName && newEntry.startTime && newEntry.endTime){
        createEntry({variables: {record: newEntry}, context: {headers: {"user-name": getUserName()}}});
        setNewEntry({tagBundleName:'', tagName:'', startTime: '', endTime: ''});
        }
    }

    const setNewEntryField = (event, field) => {
        console.log('hej');
        switch(field) {
            case 'startTime':
                setNewEntry({
                    ...newEntry,
                    startTime: event.target.value,
                })
                
            break;
            case 'endTime':
                setNewEntry({
                    ...newEntry,
                    endTime: event.target.value
                });
            break;
            case 'tagBundleName':
                setNewEntry({
                    ...newEntry,
                    tagBundleName: event.target.value
                });
            break;
            case 'tagName':
                setNewEntry({
                    ...newEntry,
                    tagName: event.target.value
                });
            break;

        }
    }

    
    return(
        <div className='wrap'>
                <Entries  loading={loading} dataEntries={data?.entryMany} dataBundles={objct?.data?.tagBundleMany}/>
                <div className='record'>
                    <input  type='text' value={newEntry.startTime} onChange={(event) => setNewEntryField(event,'startTime')} onBlur={addEntrie}/> 
                    <input className='rightInput' type='text' value={newEntry.endTime} onChange={(event) => setNewEntryField(event,'endTime')} onBlur={addEntrie}/>
                    <select className='selectInput' value={newEntry.tagBundleName} onChange={(event) => setNewEntryField(event,'tagBundleName')} onBlur={addEntrie}>
                        <option></option>
                    {objct?.data?.tagBundleMany?.map((elem, indx) =>
                        <option key={indx}>{elem.name}</option>)}
                    </select>
                    <input  type='text' onBlur={addEntrie} value={newEntry.tagName} onChange={(event) => setNewEntryField(event,'tagName') }/>
                    <div className='buttonWrap'>
                        <button className='addButton'>+</button>
                        <button className='removeButton'>-</button>
                    </div>
                </div>
          
        </div>
    )

}

export default Worklogs;