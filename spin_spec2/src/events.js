import React from "react";
import { MdDirections } from "react-icons/md";
import "./whole_page.css"
function CurrentEvent(props){

    return (
        <article
        style={{
          display: "block",
          margin: "20px",
          padding: "10px",
          borderRadius: "15px",
          background: "#f0f0f0",
          background: "rgb(40,40,40)",
          color: "yellow",
       
          width: "500px",
          height: "150px"
        }}
      >
          <h4>{props.timestamp}</h4>
          <p>{props.description}</p>
      </article>

    )

}


export default CurrentEvent