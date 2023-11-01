import React from 'react';
import { Grid, Typography } from '@mui/material';

import logo from  './src/logo.png';
import ice from  './src/1.png';


import p1 from  './src/p1.jpg'; 
import p2 from  './src/p2.jpg'; 
import p3 from  './src/p3.jpg';
import p4 from  './src/p4.jpg'; 
import p5 from  './src/p5.jpg'; 
import p6 from  './src/p6.jpg';
import p7 from  './src/p7.jpg'; 
import p8 from  './src/p8.jpg'; 

import pic1 from './src/1.png'
 
 


import pic3 from './src/3.png'

 
 
import beaut from './src/beaut.jpg'
import map from './src/map.png'
import team1 from './src/team1.jpg'
import team2 from './src/team2.jpg'
import team3 from './src/team3.jfif'
import team4 from './src/team4.jfif'
import team5 from './src/team5.jfif'
import team6 from './src/team6.jfif'
import team7 from './src/team7.jfif'
import icon1 from './src/icon1.png'
import icon2 from './src/icon2.png'
import icon3 from './src/icon3.png'
import icon4 from './src/icon4.png'
import icon5 from './src/icon5.png'
import icon6 from './src/icon6.png'

import inst from './src/inst.png'
import vk from './src/vk.png'
import facebook from './src/facebook.png'

import {LearnMoreForm} from './src/LearnMoreForm/LearnMoreForm';
import {DialogWindow} from '../../components/DialogWindow/DialogWindow';

import reviews1 from './src/reviews1.jpg'


function Footer() {
  return (
    <footer>
      <div className="reviews">
            
            <div component="footer"   style={{ backgroundColor: '#402', padding: '20px', color: 'white' , height: '500px'}}>
            <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
            
            <div className='contactItem'> 
            
            <div className='map'> 
            <img  src={map}
            alt="Logo"
            style={{
            marginRight: '10px',
            marginTop: '10px',
            borderRadius: '20px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
            transform: 'translateZ(5px)',
            width: '100%', 
            }}
            />
            </div>
            
            
            <div className="contact">  <Typography variant="h6">Contact Information</Typography>
            <Typography>
            276, A2 Anandarama Rd, Moratuwa 10400
            </Typography>
            <Typography>
            Phone: +94 712742787
            </Typography>
            <Typography>
            Email: darshana.wijebahu@gmail.com
            </Typography>  </div>
            
            </div>
            </Grid>
            <Grid item xs={12} sm={4}>
            <div className="social">
                       <a className="socialItem" href="https://www.linkedin.com/in/darshana-wijebahu/" target="_blank">
                                
                                <img className='socialIcon' src = {vk}/> 
                             
                        </a>
                        <a className="socialItem" href="https://www.linkedin.com/in/darshana-wijebahu/" target="_blank">
                             
                            <img className='socialIcon' src = {inst}/> 
                            
                        </a>
                        <a className="socialItem" href="https://www.linkedin.com/in/darshana-wijebahu/" target="_blank">
                             
                            <img className='socialIcon' src = {facebook}/> 
                           
                        </a>
                       </div>
            
            
            </Grid>
            <Grid item xs={12} sm={4}>
            <img
            src={logo}
            alt="Logo"
            style={{
            marginRight: '10px',
            marginTop: '10px',
            border: '2px solid white', 
            borderRadius: '10px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
            transform: 'translateZ(5px)',
            }}
            />
             
            
            </Grid>
            <img
            src={ice}
            alt="Logo"
            style={{
                position: 'absolute',
            marginLeft: '60%',
            marginTop: '110px',
            width: '30%',
            height: '30%',
            borderRadius: '10px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
            transform: 'translateZ(5px)',
            }}
            />
            <Typography
            variant="body2"
            align="center"
            style={{
            
            position: 'absolute',
            color: 'white',
            fontSize: '40px',
            fontStyle: 'italic', 
            marginLeft: '40%',
            marginTop: '400px',
            }}
            >
            &copy; {new Date().getFullYear} COOQUE.com
            </Typography>   
            </Grid>
            
            
            
            </div>
            
            </div>
    </footer>
  );
}

export { Footer };
    






