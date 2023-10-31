import './Main.css';
import React, { useState , Component } from 'react';
import { Container, Typography, Grid, Link } from '@mui/material';
import logo from  './src/logo.png';
import brown from  './src/brown.jpg'; 
import assorti from  './src/assorti.jpg'; 
 
import pic1 from './src/1.png'
 
 


import pic3 from './src/3.png'

 
 
import beaut from './src/beaut.jpg'

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


export class Main extends Component {
    state = {
        scrollOn: true,
        showLearnMoreForm: false,
        
    }; 
    
    hideShowLearnMoreForm = () =>{
        this.setState(({  scrollOn, showLearnMoreForm}) =>{
            return{ 
                scrollOn: true, 
                showLearnMoreForm: false
            }; 
        }) 
        
    }
    showShowLearnMoreForm = ( ) =>{
        this.setState(({  scrollOn, showLearnMoreForm}) =>{
            return{ 
                scrollOn: false,
                showLearnMoreForm: true
            }; 
        }) 
        
    }
    componentDidMount(){
        window.addEventListener('keyup', (e) => {
            if (e.key === 'Escape' && this.state.showLearnMoreForm){
               this.hideShowLearnMoreForm()
            }
        })
    }
    
render(scrollOn){
     const isScrollOn = scrollOn ? 'visible':'hidden';
     
    return (
        
        <>  
       
         <div className="Main"  >
         <header className="Main-header">
          
            
           <table border="0" className='table'> 
           
           <tr>
           <td className='probel'> 
               <div>  
                 <img src = {pic1} className='moroz'/> 
               </div>
             </td>
             <td className = 'mainTable'> 
             The freshest natural ingredients in ice cream production
             <div className='pontDesc'>
             Welcome, where the magic of ice cream comes to life. We're dedicated to crafting the creamiest, 
             most delicious frozen treats that will leave your taste buds dancing with joy. Explore our menu to discover a world of flavors, each scoop made 
             with love and served with a smile. Whether you're a fan of classic favorites or adventurous 
             enough to try our unique creations, we have something for everyone. Join us in celebrating the simple pleasures of life, one scoop at a time.
             </div>
             </td>
             
             <td className='probel'> 
             <div>  
             <img src = {pic3} className='cacao'/> 
             </div>
             </td>
           </tr>
            
           <td className='probel'> </td>
           <td>  <button className='btn' onClick={ this.showShowLearnMoreForm }>place your order</button></td>
          
           
    </table>
         </header>
         <body style={{overflow:isScrollOn}} >
         <div className="products">
       <div className="pictures">
          
           <div className="productItem">
           <img className="productPhoto" src={assorti} alt="" width="650"/>
               <div className="productContent">
                   <div className="productTitle">Product name</div>
                   <div className="productText">product description</div>
               </div>
           </div>
           <div className="productItem">
           <img className="productPhoto" src={brown} alt="" width="650"/>
               <div className="productContent">
                   <div className="productTitle">Product name</div>
                   <div className="productText">product description</div>
               </div>
           </div>
           <div className="productItem">
           <img className="productPhoto" src={beaut} alt="" width="650"/>
               <div className="productContent">
                   <div className="productTitle">Product name</div>
                   <div className="productText">product description</div>
               </div>
           </div>
           <div className="productItem">
           <img className="productPhoto" src={brown} alt="" width="650"/>
               <div className="productContent">
                   <div className="productTitle">Product name</div>
                   <div className="productText">product description</div>
               </div>
           </div>
           </div>
           <div className="pictures">
           <div className="productItem">
           <img className="productPhoto" src={brown} alt="" width="650"/>
               <div className="productContent">
                   <div className="productTitle">Product name</div>
                   <div className="productText">product description</div>
               </div>
           </div>
           <div className="productItem">
           <img className="productPhoto" src={assorti} alt="" width="650"/>
               <div className="productContent">
                   <div className="productTitle">Product name</div>
                   <div className="productText">product description</div>
               </div>
           </div>
           <div className="productItem">
           <img className="productPhoto" src={beaut} alt="" width="650"/>
               <div className="productContent">
                   <div className="productTitle">Product name</div>
                   <div className="productText">product description</div>
               </div>
           </div>
           <div className="productItem">
           <img className="productPhoto" src={brown} alt="" width="650"/>
               <div className="productContent">
                   <div className="productTitle">Product name</div>
                   <div className="productText">product description</div>
               </div>
           </div>
           </div>
       </div>
           
            
           
            
    
   
            
               <div className="features">
               <div className="features1">
                   <div className="featuresItem">
                       <img className="featuresIcon" src={icon1} alt=""/>
                       <h4 className="featuresTitle">Free Delivery</h4>
                       <div className="featuresText">Delivery within the city of Ufa is free. Up to 10 km from the city 2000, further - price is negotiable</div>
                   </div>
                   <div className="featuresItem">
                   <img className="featuresIcon" src={icon2} alt=""/>
                   <h4 className="featuresTitle">The best prices</h4>
                   <div className="featuresText">We are constantly trying to optimize our delivery and production routes to provide the best deal for you. </div>
                   </div>
                   <div className="featuresItem">
                   <img className="featuresIcon" src={icon3} alt=""/>
                   <h4 className="featuresTitle">All we are all legal</h4>
                   <div className="featuresText">We work in accordance with the legislation of the Russian Federation and always provide all reports</div>
                   </div>
                   </div>
                   <div className="features1">
                   <div className="featuresItem">
                   <img className="featuresIcon" src={icon4} alt=""/>
                   <h4 className="featuresTitle">High quality packaging</h4>
                   <div className="featuresText">We purchase high-quality materials for packaging so that the ice cream gets into your hands without problems and in the best condition.</div>
                   </div>
                   <div className="featuresItem">
                   <img className="featuresIcon" src={icon5} alt=""/>
                   <h4 className="featuresTitle">Great quality</h4>
                   <div className="featuresText">We regularly check our suppliers and carefully monitor the quality of goods</div>
                   </div>
                   <div className="featuresItem">
                   <img className="featuresIcon" src={icon6} alt=""/>
                       <h4 className="featuresTitle">Growing popularity</h4>
                       <div className="featuresText">We always welcome new customers and do everything possible to continue cooperation</div>
                   </div>
                   </div>
               </div> 
            
    
   
       <div className="team">
           
               <div className="teamInner">
                   <div className="teamItem">
                   <img className="teamPhoto" src={team1} alt=""/>
                       <div className="teamName">Darshana Wijebahu</div>
                       <div className="teamProf">Group Leader</div>
                       <div className="teamText">
                           <p>
                           Diverse and rich experience, the beginning of daily work to form a position entails the process of introducing and modernizing areas of progressive development.
                           </p>
                       </div>
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
                   </div>
                   <div className="teamItem">
                   <img className="teamPhoto" src={team2} alt=""/>
                       <div className="teamName">Dulaj Upananda</div>
                       <div className="teamProf">Group Member</div>
                       <div className="teamText">
                           <p>
                              Diverse and rich experience, the beginning of daily work to form a position entails the process of introducing and modernizing areas of progressive development.      </p>
                       </div>
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
                   </div>
                    
                   <div className="teamItem">
                   <img className="teamPhoto" src={team3} alt=""/>
                       <div className="teamName">Tharushi Nishanka</div>
                       <div className="teamProf">Group Member</div>
                       <div className="teamText">
                           <p>
                              Diverse and rich experience, the beginning of daily work to form a position entails the process of introducing and modernizing areas of progressive development.      </p>
                       </div>
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
                   </div>
                   <div className="teamItem">
                   <img className="teamPhoto" src={team4} alt=""/>
                       <div className="teamName">Thamodhya Bandara</div>
                       <div className="teamProf">Group Member</div>
                       <div className="teamText">
                           <p>
                              Diverse and rich experience, the beginning of daily work to form a position entails the process of introducing and modernizing areas of progressive development.      </p>
                       </div>
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
                   </div>
                   <div className="teamItem">
                   <img className="teamPhoto" src={team5} alt=""/>
                       <div className="teamName">Heshani Chnadrasekara</div>
                       <div className="teamProf">Group Member</div>
                       <div className="teamText">
                           <p>
                              Diverse and rich experience, the beginning of daily work to form a position entails the process of introducing and modernizing areas of progressive development.      </p>
                       </div>
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
                   </div>
                   <div className="teamItem">
                   <img className="teamPhoto" src={team6} alt=""/>
                       <div className="teamName">Sachini Fonseka</div>
                       <div className="teamProf">Group Member</div>
                       <div className="teamText">
                           <p>
                              Diverse and rich experience, the beginning of daily work to form a position entails the process of introducing and modernizing areas of progressive development.      </p>
                       </div>
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
                   </div>
                   <div className="teamItem">
                   <img className="teamPhoto" src={team7} alt=""/>
                       <div className="teamName">Nethmi Dulanjali</div>
                       <div className="teamProf">Group Member</div>
                       <div className="teamText">
                           <p>
                              Diverse and rich experience, the beginning of daily work to form a position entails the process of introducing and modernizing areas of progressive development.      </p>
                       </div>
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
                   </div>
                   
                
           </div> 
       </div>
   
   
   
      
       <div className="reviews">
            
               <div className="reviewsItem">
                   <div className="reviewsPhoto">
                       <img className="reviewsImg" src={reviews1} height ="550" alt=""/>
                   </div>
                   <div className="reviewsContent">
                       <div className="reviewsText">
                       We're here to make your ice cream dreams come true. Whether you have questions, feedback, or special requests, we'd love to hear
                        from you. Find your nearest location and come say hello. Your opinion matters t
                        o us, and we're dedicated to serving you during our operating hours
                        
                       </div>
                     
                   </div>
               </div>
           
       </div>
   
   
            
         </body>
         <div className="line"></div> 
   
   
   
        
         <div className="reviews">
            
            <div component="footer" maxWidth="xl" style={{ backgroundColor: '#402', padding: '20px', color: 'white' }}>
   <Grid container spacing={3}>
     <Grid item xs={12} sm={4}>
       <Typography variant="h6">Contact Information</Typography>
       <Typography>
         Address: 123 Main Street, City, Country
       </Typography>
       <Typography>
         Phone: +123-456-7890
       </Typography>
       <Typography>
         Email: contact@example.com
       </Typography>
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
     <img src={logo} alt="Logo"  style={{ marginRight: '10px',
              marginTop:'10px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    transform: 'translateZ(5px)' }}/>
     </Grid>
   </Grid>
   <Typography
  variant="body2"
  align="center"
  style={{
    marginTop: '20px',
    color: 'white',
    fontSize: '20px', // Increase the font size to your desired value
    fontStyle: 'italic', // Apply an italic style or use 'fontWeight' for bold
  }}
>
  &copy; {new Date().getFullYear} COOQUE.com
</Typography>


            </div>
        
    </div>
       
       </div>
       
       { this.state.showLearnMoreForm ? (<>
        <LearnMoreForm  hideShowLearnMoreForm = {this.hideShowLearnMoreForm}/>
       </> ) :null
      } 
       </>
    )
  
   
  }
}
