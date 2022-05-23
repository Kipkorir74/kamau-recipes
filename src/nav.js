const Nav = () => {
    return (  
       
         <nav className="navbar">
           <a href="/">  <h3>Kamau Recipes</h3></a>
             <div className="links">
             <a href="/create" style={{
                    color:"white",
                    backgroundColor: "#f1356d",
                    borderRadius:"8px"
                }}>Create Recipe</a>
             </div>
            
         </nav>
        
    );
}
 
export default Nav;