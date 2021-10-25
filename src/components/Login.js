import React, {useState, useEffect} from 'react';
import {useLazyQuery} from '@apollo/client';
import Queries from './Graphql';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import  {useHistory} from 'react-router-dom';
import getUserName from './Authorization';
import selleo from '../pictures/selleo.png';



const Login = () => {
    const [userNameValue, setUserNameValue] = useState('');
    const [getProfile, { loading, error, data }] = useLazyQuery(Queries.GET_PROFILE);
    let history = useHistory();
    
    useEffect(() => {
        const userName = getUserName();
        if(userName) {
            history.push('/calendar');
        }
    },[])

    const setUserName = (event) => {
        setUserNameValue(event.target.value);
    }

    const loginUser = (event) => {
        if(event.target.value === ''){
            alert('Wprowadź nazwę użytkownika')
        }
        else{
            localStorage.setItem('user-name', `${event.target.value}`);
            getProfile({context: {headers: {"user-name": `${event.target.value}`}}});
            history.push('/calendar');
            
        }
    }
    
    return(
        <React.Fragment>
            <div className='logo'><img  src={selleo}/></div>
            <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            >  
                <form>
                    <TextField className='loginInput' onChange={setUserName} type='text'/>
                    <Button className='login' onClick={loginUser} value={userNameValue} variant="contained">Zaloguj</Button>
                </form>
            </Grid>
        </React.Fragment>
    );
}

export default Login;