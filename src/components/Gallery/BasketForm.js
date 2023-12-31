 

 
import {React, useState} from 'react';
import CloseIcon from '@mui/icons-material/Close'; 
import IcecreamIcon from '@mui/icons-material/Icecream';
export const BasketForm = ({ hideBasketForm, arr, collections, hideBasketFormBuy } ) => {
  const [sum, setSum] = useState(0)
  const makeSum = (arr, obj) =>{
    for (let i =0; i<obj.lenght; i++){
      console.log('arrays', arr[i], obj[i])
      setSum(sum + (arr[i] * obj[i].cost))
    }
    console.log(sum)
    return(sum)
  }
  return (
    <div className="BasketForm">
        
        
       <div className = 'mainBasketForm'>
       <button className='btnBasketForm'   onClick={  hideBasketFormBuy } >Buy</button>
            
       <div className='allTextLearnMoreForm'>
       <div className='textLearnMoreForm'>
           <span className='closeIcon'  onClick={hideBasketForm} >   <CloseIcon/>  </span>
           
            </div>
            <div className='probel1'>
            &nbsp; 
            </div>
             
          <div className='textLearnMoreFormHeader'>
            
          <h2> Your cart</h2>

           
          {
    
          }

         {
           collections                                                                 
           
           .map((obj, index)=>(
            
            arr[index] != undefined ?
               
               <h3> <IcecreamIcon/> 

                {obj.name}  <span class="greytext">  - {arr[index]} for  {arr[index] * obj.cost  }  
                 &nbsp; рублей  </span> </h3>
              : <></>
              
           )
           ) 
          
         }
           <h3>  { makeSum(arr, collections)} </h3>
         
            </div>
             
            
          </div>
      </div>
      </div>
  )
}
