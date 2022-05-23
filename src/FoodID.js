import axios from "axios";
import { useEffect, useState } from "react";
import foods from "./foods";



const FoodID = () => {
    const[foods, setFoods]=useState([]);
    const {id}= useState();
   
    useEffect(()=>{
        axios.get(`http://localhost:8000/foods/`+ id)
        .then(response=>{
            console.log(response)
            // setFoods(response.data)
        }
            
            )
            .catch(error=>{
                console.log(error);
            }
                
                )
    },[])
    return ( 
       <div>
           
           <article>
                   <div> Name:{foods && foods.foodName}</div>
                   <p>Ingredients: {foods &&foods.ingredients}</p>
                   <div>Recipe:{foods && foods.recipe}</div>
                  
            </article> 
           
          
       </div>
     );
}
 
export default FoodID;