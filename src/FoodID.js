import axios from "axios";
import { useEffect, useState } from "react";
import foods from "./foods";



const FoodID = () => {
    const[foods, setFoods]=useState({});
    const [id, setID]= useState(1);
   
    useEffect(()=>{
        axios.get(`http://localhost:8000/foods/${id}`)
        .then(response=>{
            console.log(response)
            setFoods(response.data)
        }
            
            )
            .catch(error=>{
                console.log(error);
            }
                
                )
    },[id])
    return ( 
       <div>
           <input type="text" value={id} onChange={e=>setID(e.target.value)}/>
           <article>
                   <div> Name:{foods && foods.foodName}</div>
                   <p>Ingredients: {foods &&foods.ingredients}</p>
                   <div>Recipe:{foods && foods.recipe}</div>
                  
            </article> 
           
          
       </div>
     );
}
 
export default FoodID;