import {React,useState } from 'react';
import './Gallery.scss';
import { useEffect } from 'react';
import {Collection} from './Collection.jsx';
import {BasketForm } from './BasketForm.js'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
export const Gallery = ( ) =>{
    const cats = [
        {"name": "All"},
        {"name": "Ingredients"},
        {"name": "Ice cream"},
    ]
const [categoryId, setCategoryId] = useState(0);
const [searchValue, setSearchValue] = useState('');
const [collections, setCollections] =useState([]);
const [basketClicked, setBasketClicked] =useState(false);
const [inputValueArr, setInputValueArr] = useState([])
const [basketFormVisibitity, setBasketFormVisibitity] =useState(false);
const [thingsInBasket, setThingsInBasket] = useState(0)
 const basketClickEvent = ( )=>{
   

     
   setBasketFormVisibitity(!basketFormVisibitity)

 }
 const hideBasketForm =() =>{
    setBasketFormVisibitity(false)
 }
 const hideBasketFormBuy = () =>{
    setBasketFormVisibitity(false)
    alert('Thank you for your purchase!')
 }
useEffect(()=>{
    fetch(`${
        categoryId ? `category=${categoryId}` : '' }`,
        
    )
    .then((res)=> res.json())
    .then((json) => {
        setCollections(json);
        
    })
    .catch((err)=>{
        console.warn(err);
     
        alert('error ')
    });
}, [categoryId]);

 
if (collections.length ===0)
    return <h2 className = 'loading'>Loading data...</h2>
else
 
if (basketFormVisibitity == true)
return (
     
    <>  
     <BasketForm 
     arr ={inputValueArr} 
      hideBasketForm  = { hideBasketForm } 
      text ={"form"}
      collections ={collections }
      hideBasketFormBuy = {hideBasketFormBuy}
      /> 
    
      </>
)
return(
    <div className="Gallery">
          { 
   
       }
        <a className='ShoppingBasketIcon'  onClick={basketClickEvent} > <ShoppingBasketIcon/>Basket (0)</a> 
      <h1>Goods</h1>
      <div className="top">

   <ul className="tags">
         {cats.map((obj, i)=>(
            <li
            onClick = {()=> setCategoryId(i)}
            className={categoryId===i? 'active':''}
            key = {obj.name}>
                {obj.name}
            </li>
         ))}
        </ul> 



      
        <input value = {searchValue}                        
         onChange={e => setSearchValue(e.target.value)} 
         className="search-input" 
         placeholder="Search by name" 
         />

      </div>
      <div className="content">
     
      { 
       collections                                                                 
        .filter((obj)=> obj.name.toLowerCase().includes(searchValue.toLowerCase()))
        .map((obj, index)=>(
             
            <Collection num = {index} key ={index} cost = {obj.cost} name ={obj.name} images = {obj.photos}  
            count = { obj.count}
            basketClicked = {basketClicked}
            setBasketClicked = { setBasketClicked}
            basketClickEvent = {basketClickEvent}
            inputValueArr = {inputValueArr}
            setInputValueArr = {setInputValueArr}
            />
             
                
                
        ))
        
        }
 

      </div>
    </div>
  );
}

 