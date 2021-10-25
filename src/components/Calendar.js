import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';
import Button from '@mui/material/Button';
import DatePicker from 'react-date-picker';
import Grid from '@mui/material/Grid';
import Worklogs from './Worklogs';
import getUserName from './Authorization';


const Calendar = () => {
    const initialDate = new Date();
    const [actualDate, setActualDate] = useState(initialDate); 

    const StringDate = () => {
        const options = {day: 'numeric', year: 'numeric', month: 'long' };
        return actualDate.toLocaleDateString('pl-PL', options);
    }

    const setDate = (event) =>{
        const date = actualDate.getDate() + Number(event.target.value);
        const newDate = new Date(actualDate.setDate(date));
        setActualDate(newDate);
    }

    const getDateFromPicker = (time) =>{
        if(time >= initialDate || time === null){
          return;
        }
        setActualDate(time);
    }
 
    return (
        <React.Fragment>
            {!getUserName() && <Redirect to='/'/>}
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >  
                <Button className='dateButton' onClick={setDate} value={- 1} variant="contained">&#171;</Button>
                    <h4 className='date'>{StringDate()}</h4>
                    {actualDate.toLocaleDateString().slice(0,10) === initialDate.toLocaleDateString().slice(0,10) && <p>&nbsp;(Dzisiaj!)</p>}
                <Button className='dateButton' onClick={setDate} value={1} variant="contained" disabled={actualDate.toLocaleDateString().slice(0,10) === initialDate.toLocaleDateString().slice(0,10)}>&#187;</Button>
                <DatePicker
                onChange={(event) => getDateFromPicker(event)}
                value={actualDate}
                />
            </Grid>
            <Worklogs date={actualDate} />
        </React.Fragment>
    )
}

export default Calendar;