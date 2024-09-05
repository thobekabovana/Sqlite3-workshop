import { Outlet, Link } from "react-router-dom";


let styles = {
  nav: {
    backgroundColor: 'violet',
    padding: '10px',
    color: '#333'
  }}

export const Navig = () => {
  return (
    <>
      <nav>
        <ul>
       
            
       <div style={{ position: "absolute", top: "1%", left: "0.5%", right: "0.5", width: "99%"}}>
           
            <nav style={styles.nav}>
 
            

            <Link to="/user" style={{ fontSize: "20px", color: "white", marginLeft: "85%"}}>Add User</Link>
        
            <Link to="/create" style={{fontSize: "20px",  color: "white",marginLeft: "3%" }}>SignUp</Link>
            </nav>
            </div>
          
        </ul>
      </nav>

      <Outlet />

    </>
  )
};