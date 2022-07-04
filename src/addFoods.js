import React, { Component } from 'react'
import axios from 'axios'

 class addFoods extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         foodName:'',
         ingredients:'',
         recipe:'',
         files:''

      }
    }
    // handleChange=(e)=>{
    //   const fileReader = new FileReader();
    //   fileReader.readAsText(e.target.files[0], "UTF-8");
    //   fileReader.onload = e => {
    //     console.log("e.target.result", e.target.result);
    //     this.setState(e.target.result);
    //   };
    // }
    //changeMonitor is an arrow function to handle changes as inserted by user
    //name attribute helps remove the redundancy of having separate handlers for each input.
    changeMonitor = (e) =>{
        this.setState({[e.target.name] : e.target.value})
    }

    submitHandler = (e)=>{
        e.preventDefault()
        console.log(this.state)
        axios.post('http://localhost:8000/foods', this.state)
            .then(response=>{
                console.log(response)
            })
            .catch(error=>{
                console.log(error)
            })
    }

  render() {
      //destructure the state property
      const{foodName,ingredients, recipe, files} = this.state;

    return (
        <div className="create">
        
        <div>
       <h2> Enter the details of your Food</h2>
      </div> 
     
      <form onSubmit={this.submitHandler}>
          
          {/* onChange() tracks the value of input changes and keep them in sync with the state object   */}
          
          <div>
                <label>Food Name:</label>
                <input type="text" name="foodName" required value={foodName} onChange={this.changeMonitor}/>
          </div>
          
          <div>
                <label>Ingredients:</label>
                <input type="textarea" name="ingredients" required  value={ingredients} onChange={this.changeMonitor}/>   
          </div>  

          <div>
                <label>Recipe:</label>
                <input type="textarea" name='recipe' required value={recipe} onChange={this.changeMonitor}/>
          </div>

          {/* <h1>Upload File</h1>

          <input type="file" onChange={this.handleChange} />
          <br />
          {"uploaded file content -- " + files} */}

          <button type='submit'>Add food </button>
    

      </form>
        </div>
  
  
    )
  }
}

export default addFoods