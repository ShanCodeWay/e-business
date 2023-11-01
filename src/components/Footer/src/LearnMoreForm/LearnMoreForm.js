 

import './LearnMoreForm.css';
import {React, useState} from 'react';
import CloseIcon from '@mui/icons-material/Close'; 
import axios from 'axios'
export const LearnMoreForm = ({ hideShowLearnMoreForm} )  => {
  const [surname, setSurname] = useState('')
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [email, setEmail] = useState('')
  const handleSurnameChange = (e) =>{
      setSurname(e.target.value) 
  }
  const handleNameChange = (e) =>{
    setName(e.target.value) 
}
const handleNumberChange = (e) =>{
  setNumber(e.target.value) 
}
const handleEmailChange = (e) =>{
  setEmail(e.target.value) 
}
const btnClick = async() =>{ 
  hideShowLearnMoreForm()
  const value = ({surname, name, number, email})
 
  try {
    const {data} = await axios.post('https://63708fe208218c267e017d80.mockapi.io/Arr', value);
    
} catch (e) {
    console.log('Axios request failed:', e);
}
}
  return (
    <div className="LearnMoreForm">
       <div className = 'mainLearnMoreForm'>
       <div className='allTextLearnMoreForm'>
       <div className='textLearnMoreForm'>
           <span className='closeIcon'  onClick={ hideShowLearnMoreForm} >   <CloseIcon/>  </span>
           
            </div>
            <div className='probel1'>
            &nbsp; 
            </div>
          <div className='textLearnMoreFormHeader'>
            
             <h2>Your Details:</h2>
             
            </div>
            <div className='textLearnMoreForm'>
            <div className='Reg' >
              <div> 
            <input type = "text"    
      onChange={handleSurnameChange}
         placeholder='username'
           
           className='inputReg'
           required
           /> 
            </div>
            <div className='probel1'>
            &nbsp; 
            </div>
            <div>
            <input type = "text"      
         placeholder='name'
         
           className='inputReg'
           required
           /> 
            </div>
            <div className='probel1'>
            &nbsp; 
            </div>
            <div>
            <input type = "text"          
        onChange={handleNumberChange}
           placeholder='Contact number'
         
           className='inputReg'
           required
           /> 
             <div className='probel1'>
            &nbsp; 
            </div>
            <div>
            <input type = "text"     
        onChange={handleEmailChange}
           placeholder='email'
         
          
           className='inputReg'
           required
           /> 
            </div>
            </div>
            </div>
            </div>
            <div className='probel1'>
            &nbsp; 
            </div>
            <div className='btnLearnMoreWrapper'>  
            <button className='btn'   onClick={   btnClick} >Submit</button>
            </div>
          </div>
      </div>
      </div>
  )
}
