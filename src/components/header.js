import React from "react";
import "./header.css"
 const Header=()=>{
    return(<div>
   <div className="text">
    <div className="textmovie">Movies</div>
    <div>
          <input type="text" placeholder="Search..." className="inp" />
          <button className="but1">Search</button>
        </div>
   </div>
   <div className="hr">
    <hr></hr>
    </div>
   </div>
    )
 }
 export default Header;