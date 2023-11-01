import './Header.css';
import logo from  './src/logo.png';
import ice from  './src/1.png';
import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Dialog } from '@mui/material';
import { Logout as LogoutIcon } from '@mui/icons-material';
import { DialogWindowExit } from '../../components/DialogWindowExit/DialogWindowExit';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import {LearnMoreForm} from '../Main/src/LearnMoreForm/LearnMoreForm';



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
  


  // Create an array of states for each button
  const [isHoveredArray, setIsHoveredArray] = useState([false, false, false, false, false]);

  const buttonStyles = (index) => {
    return {
      color: isHoveredArray[index] ? 'grey' : 'white',
      transition: 'background-color 0.3s',
      backgroundColor: 'transparent',
    };
  };

  // Function to handle mouse enter and leave for a specific button
  const handleMouseEnter = (index) => {
    const updatedIsHoveredArray = [...isHoveredArray];
    updatedIsHoveredArray[index] = true;
    setIsHoveredArray(updatedIsHoveredArray);
  };

  const handleMouseLeave = (index) => {
    const updatedIsHoveredArray = [...isHoveredArray];
    updatedIsHoveredArray[index] = false;
    setIsHoveredArray(updatedIsHoveredArray);
  };

  registerLinkVisibility = !isLoggedIn ? 'visible' : 'hidden';
  welcomeLinkVisibility = isLoggedIn ? 'visible' : 'hidden';

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

  return (
    <ThemeProvider theme={theme}>
      <div>
        <AppBar position="static">
          <Toolbar>
            <img
              src={logo}
              alt="Logo"
              style={{
                marginRight: '10px',
                marginTop: '10px',
                borderRadius: '10px',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
                transform: 'translateZ(5px)',
                border: '4px solid white',
              }}
            />
            <Typography variant="h3" component="div">
              <span style={{ fontFamily: 'Arial', fontWeight: 'bold', color: 'White' }}>ICE</span>
              <span style={{ fontFamily: 'Times New Roman', fontStyle: 'italic', color: 'pink', fontWeight: 'bold' }}> CREAM</span>
            </Typography>
            <img
              src={ice}
              alt="p1"
              style={{
                height: '10%',
                width: '10%',
                marginRight: '10px',
                marginTop: '10px',
                borderRadius: '10px',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
                transform: 'translateZ(5px)',
                
              }}
            />
            <div style={{ flexGrow: 1 }}></div>
            <Button
              className='button'
              href="/"
              style={buttonStyles(0)}
              onMouseEnter={() => handleMouseEnter(0)}
              onMouseLeave={() => handleMouseLeave(0)}
            >
              Home
            </Button>
            <Button
              className='button'
              href="/CartApp"
              style={buttonStyles(1)}
              onMouseEnter={() => handleMouseEnter(1)}
              onMouseLeave={() => handleMouseLeave(1)}
            >
              Place an order
            </Button>
            <Button
              href="/products"
              style={buttonStyles(2)}
              onMouseEnter={() => handleMouseEnter(2)}
              onMouseLeave={() => handleMouseLeave(2)}
            >
              Products
            </Button>
            <Button
              href="/reviews"
              style={buttonStyles(3)}
              onMouseEnter={() => handleMouseEnter(3)}
              onMouseLeave={() => handleMouseLeave(3)}
            >
              Reviews
            </Button>
            <Button
              href="/register"
              className="button"
              style={buttonStyles(4)}
              onMouseEnter={() => handleMouseEnter(4)}
              onMouseLeave={() => handleMouseLeave(4)}
            >
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
