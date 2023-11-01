import './Reviews.css';
import React, { useState , Component } from 'react';
import axios from 'axios';
import {ReviewsForm} from './src/ReviewsForm/ReviewsForm';
import {Review} from './src/Review/Review'

export class Reviews extends Component {
  state = {
      scrollOn: true,
      showReviewsForm: false,
      reviewsArr: JSON.parse(localStorage.getItem('reviewsArr')), 
       
  }; 
  addNewReview = (treview) =>{
    axios.post('', treview)
     
    .catch((err)=>{
      console.log(err)
    })

    const temp = [...this.state.reviewsArr]
    temp.push(treview)
    this.setState({
      reviewsArr: temp
    })
     
    localStorage.setItem('reviewsArr', JSON.stringify(temp))
  }
  hideShowReviewsForm = () =>{
      this.setState(({  scrollOn, showReviewsForm}) =>{
          return{ 
              scrollOn: true, 
              showReviewsForm: false
          }; 
      }) 
      
  }
  showShowReviewsForm = ( ) =>{
      this.setState(({  scrollOn, showReviewsForm}) =>{
          return{ 
              scrollOn: false,
              showReviewsForm: true

          }; 
      }) 
      
  }
   
  componentDidMount(){
     
      window.addEventListener('keyup', (e) => {
          if (e.key === 'Escape' && this.state.showReviewsForm){
             this.hideShowReviewsForm()
          }
      })
     
      fetch(``) 
    .then((res)=> res.json())
    .then((json) => {
      this.setState({
         reviewsArr: json
         
      })
      
    })
    .catch((err)=>{
        console.warn(err);
    
        alert('error')
    });
   
     
  }
  
render( ){
   
  if ((this.state.reviewsArr ?? []).length === 0)

  return <h2 className = 'zagruzka'>Loading data...</h2>
  else
  return (
     
      <>
     <div className='Reviews'>
      <div className='btnReviewsBlock'>
      <h2 className='h31'> Leave a review and we'll give you a discount</h2> <button className='btn' onClick={ this.showShowReviewsForm }>Leave a review</button>
           </div>
   
          
           {(this.state.reviewsArr.reverse())                                                            
            .map((obj)=>(
              <Review 
              stars ={obj.stars}
              name ={obj.name} 
              text = {obj.text}
              time = {obj.time}
             />
        ))}
    
     { this.state.showReviewsForm ? (<>
      <ReviewsForm  
        hideShowReviewsForm = {this.hideShowReviewsForm}
        reviewsArr={this.state.reviewsArr}
        addNewReview = {this.addNewReview}
        userName = {this.props.userName}
        />
     </> ) :null
    } 
    </div>
     </>
  )

 
}
}
