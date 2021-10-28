import React, {useState} from 'react';

const OneEntry = ({elem, dataBundles}) => {
    const [value, setValue ] = useState({
        tagBundleName: elem.tag.tagBundle.name,
        tagName: elem.tag.name,
        startTime: elem.startTime,
        endTime: elem.endTime})
  

    const setNewEntryField = (event, field) => {
        switch(field) {
            case 'startTime':
                setValue({
                    ...value,
                    startTime: event.target.value,
                })
    
            break;
            case 'endTime':
                setValue({
                    ...value,
                    endTime: event.target.value
                });
            break;
            case 'tagBundleName':
                setValue({
                    ...value,
                    tagBundleName: event.target.value
                });
            break;
            case 'tagName':
                setValue({
                    ...value,
                    tagName: event.target.value
                });
            break;

        }
    }

    return (
    <div >
        <div className='record'>
            <input  type='text'  value={value.startTime} onChange={(event) => setNewEntryField(event,'startTime')}/>
            <input className='rightInput' type='text' value={value.endTime} onChange={(event) => setNewEntryField(event,'endTime')} />
            <select className='selectInput' value={value.tagBundleName} onChange={(event) => setNewEntryField(event,'tagBundleName')}>
                {dataBundles.map((val, indx) =>
                <option key={indx}>{val.name}</option>)}
            </select>
            <input  type='text' value={value.tagName } onChange={(event) => setNewEntryField(event,'tagName')}/> 
            <div className='buttonWrap'>
            <button className='addButton'>+</button>
            <button className='removeButton'>-</button>
        </div>
    </div>
    </div>  
    )
}

export default OneEntry;