import React from "react";
import "./whole_page.css"
import {MdOutlineVerifiedUser} from "react-icons/md"
function CurrentUser(props){
    return (
        <article
        style={{
          display: "block",
          margin: "20px",
          padding: "10px",
          borderRadius: "15px",
          background: "#f0f0f0",
          color: "black",
          boxShadow: "0 3px 6px 0 #f0f0f0, 0 6px 10px 0 #f0f0f0",
          width: "200px",
          height: "200px"
        }}
      >
       
          <h4>{props.name}</h4>
          <p>{props.isOnline}</p>
          <p>Live Heart Rate</p>
          <p>Base Line</p>
          <p class = "p10"> Melt down <MdOutlineVerifiedUser/></p>
          
      </article>
    );
}
export default CurrentUser