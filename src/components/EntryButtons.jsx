import React from 'react';


const EntryButtons = ({first = false}) => {
    const addFunction = () => {
      console.log(1)
    }

    const removeButton = () => {
      console.log(2);
    }

    return (
      <div className='buttonWrap'>
        <button onClick={addFunction} className='addButton'>+</button>
        {!first && <button onClick={removeButton} className='removeButton'>-</button>}
      </div>
    )
}

export default EntryButtons;