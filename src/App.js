import './App.css';
import {Main} from './components/Main/Main';
import {Register} from './components/Register/Register';
import {Products} from './components/Products/Products';
import CartApp from './cartsrc/CartApp';
import {Routes, Route, BrowserRouter,  Navigate} from 'react-router-dom';
import {React, useState} from 'react';
import {Gallery } from './components/Gallery/Gallery'

import {Header} from './components/Header/Header'
import {Reviews} from './components/Reviews/Reviews'
import {Footer} from './components/Footer/Footer'
import { Grid, Typography } from '@mui/material';

export function App() {
   
  const [basketArr, setBasketArr] = useState([])
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    if (localStorage.getItem('isLoggedIn') === 'true') return true
    
    return false
   
  })
  const [points, setPoints] = useState((localStorage.getItem('points')  ) )
  const [userName, setUserName] = useState((localStorage.getItem('userName')) )
  

      
  return (
 
    <>  
      
    <div className="App">
  
     <Header  
     props
    userName = {userName}
    setIsLoggedIn= {setIsLoggedIn}
     isLoggedIn ={isLoggedIn}
     points = { points}
     />
      <main>  
      <div className="line"></div> 
     
        <BrowserRouter>  
          <Routes>
          <Route path = "/CartApp" element = {<CartApp/>}/>
            <Route path = "/" element = {<Main/>}/>
            <Route path = "/gallery" element = {<Gallery 
            
            
             />}/>
         
            <Route path = "/register" element = {!isLoggedIn?<Register
             props  
             setUserName = {setUserName} 
             setIsLoggedIn ={setIsLoggedIn}
             isLoggedIn ={isLoggedIn} 
             regArr = {(localStorage.getItem('regArr'))}
             />
             :<Navigate to="/"/>}/>
            <Route path = "/products" element = {<Products/>}/>
            <Route path = "/reviews" element = {
            <Reviews
            props
              points = {points}
              userName = {userName}
              isLoggedIn = {isLoggedIn}
              regArr = {(localStorage.getItem('regArr'))}
            />}/>
            
              
          </Routes>
        </BrowserRouter>
      </main>
      <Footer/> 
    </div>
    
    </>
    
  );
}

export default App;
