import axios from "axios";
import React, { Component } from 'react'

export class foods extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          foods:[],
        
       }
     }

    //  component mounts for first time and only executes once
     componentDidMount(){
        axios.get('http://localhost:8000/foods')
        .then(response=>{
            console.log(response);
            //set the response data to the food array
            this.setState({foods:response.data})
        })
        .catch(error=>{
            console.log(error);
            
        })
     }
  render() {
      //destructure the state property
      const{foods}= this.state;
    return (  
        <div className="kichwa">
            <h2>Food Different Different</h2>
            {/* <div class="card text-white bg-primary mb-3" style="max-width: 18rem;"> */}
                            
            {
         foods.map((food=> (
                    <div key={food.id}>
                     <a href={`/foods/${food.id}`}> <h3>{food.foodName}</h3></a>
                        <h4>Ingredients: {food.ingredients}</h4>
                            <h2>Recipe</h2>
                                <p>{food.recipe}</p>

                  </div>
         ) 
          
      ))}
      </div>
    
        
            
      

       
    
    )
  }
}

export default foods

