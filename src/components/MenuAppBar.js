import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import {Link} from 'react-router-dom';
import  {useHistory, useLocation} from 'react-router-dom';
import getUserName from './Authorization';



export default function ButtonAppBar() {
  let history = useHistory();
  const location = useLocation();
  const Logout = () => {
    localStorage.removeItem('user-name');
    history.push('/')
  }

  const getActiveClass = (name) => {
    const currentPath = location.pathname;
    if(currentPath === name){
      return 'active';
    }
    return '';
  }


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to='/calendar' className={`navLink ${getActiveClass('/calendar')}`}>KALENDARZ</Link>
            <Link to='/bundle' className={`navLink ${getActiveClass('/bundle')}`}>BUNDLE</Link>
            <Link to='/settings' className={`navLink ${getActiveClass('/settings')}`}>USTAWIENIA</Link>          
          </Typography>
            <p className='logedUser'>{getUserName()}</p>
            <Button onClick={Logout}color="inherit">Wyloguj</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}