import './Header.css';
import logo from  './src/logo.png';
import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Dialog } from '@mui/material';
import { Logout as LogoutIcon } from '@mui/icons-material';
import { DialogWindowExit } from '../../components/DialogWindowExit/DialogWindowExit';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1b1b3e', 
      
    },
  },
});

export const Header = ({
  isLoggedIn,
  setIsLoggedIn,
  registerLinkVisibility,
  welcomeLinkVisibility, 
  userName, 
  points
}) => {
  const [exit, setExit] = useState(false);
  const [dialogFormVisibility, setDialogFormVisibility] = useState(false);

  const openForm = () => {
    setDialogFormVisibility(true);
  };

  const hideDialogWindow = () => {
    setDialogFormVisibility(false);
  };

  const hideDialogWindowExit = (e) => {
    setDialogFormVisibility(false);
    e.preventDefault();
    localStorage.setItem('isLoggedIn', false);
    setIsLoggedIn(false);
    localStorage.setItem('userName', ''); 
  };

  registerLinkVisibility = !isLoggedIn ? 'visible' : 'hidden';
  welcomeLinkVisibility = isLoggedIn ? 'visible' : 'hidden';

  return (
    <ThemeProvider theme={theme}>
      <div>
        <AppBar position="static">
          <Toolbar>
          <img src={logo} alt="Logo"  style={{ marginRight: '10px',
              marginTop:'10px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    transform: 'translateZ(5px)' }}/>
            <Typography variant="h3" component="div">
  <span style={{ fontFamily: 'Arial', fontWeight: 'bold', color: 'White' }}>ICE</span>
  <span style={{ fontFamily: 'Times New Roman', fontStyle: 'italic', color: 'pink',fontWeight: 'bold' }}> CREAM</span>
</Typography>
            <div style={{ flexGrow: 1 }}></div>
<Button
  href="/"
  style={{
    color: 'white',
    transition: 'background-color 0.3s',
    backgroundColor: 'transparent',
  }}
>
  Home
</Button>
<Button
  href="/gallery"
  style={{
    color: 'white',
    transition: 'background-color 0.3s',
    backgroundColor: 'transparent',
  }}
>
  Place an order
</Button>
<Button
  href="/products"
  style={{
    color: 'white',
    transition: 'background-color 0.3s',
    backgroundColor: 'transparent',
  }}
>
  Products
</Button>
<Button
  href="/reviews"
  style={{
    color: 'white',
    transition: 'background-color 0.3s',
    backgroundColor: 'transparent',
  }}
>
  Reviews
</Button>
<Button href="/register" className="button">
  Login
</Button>
<div style={{ display: welcomeLinkVisibility }}>
  <Typography style={{ marginRight: '10px', color: 'white' }}>
    Welcome {localStorage.getItem('userName')}! {' '}
  </Typography>
  <IconButton color="primary" onClick={openForm}>
    <LogoutIcon style={{ color: 'white' }} />
  </IconButton>
</div>

          </Toolbar>
        </AppBar>
  
        <Dialog open={dialogFormVisibility} onClose={hideDialogWindow}>
          <DialogWindowExit
            text="Are you sure, that you want to go out?"
            hideDialogWindow={hideDialogWindow}
            hideDialogWindowExit={hideDialogWindowExit}
          />
        </Dialog>
      </div>
    </ThemeProvider>
  );
};
