import React from 'react';
import './Login.css';
import {Link} from 'react-router-dom';
function Login(){
    return(
 <section>

    <div className="Container1">
        <ul className="Drop">
            <li>Login</li>
           <Link to="./Menu"><li className="shope">Shop</li></Link>
        </ul>
    </div>
  <center> <div className="Container2">
       <ul id="Login">
           <li></li>
           <li><input type="text" placeholder="Username/Email"></input></li>
           <li><input type="text" placeholder="Password"></input></li>
         <Link to="./Menu"><li><input className="btn" type="button" value="Login"></input></li></Link> 
           <li><a href="#">Register</a></li>
       </ul>
   </div></center>
 </section>
 


    );
}
export default Login;