import Nav from './nav';
import './App.css';
import Foods from './foods';
import AddFoods from './addFoods'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FoodID from './FoodID';

function App() {
  return (
    <Router>
        <div className="App">
     <Nav/>
      <div className="content">
      <Route exact path="/">
        <Foods/>  
      </Route>

      <Route path="/create">
         <AddFoods/>
      </Route>

      <Route path= "/foods/:id">
            <FoodID/>
      </Route>
      
      </div>
    </div>
    </Router>
    
  );
}

export default App;
