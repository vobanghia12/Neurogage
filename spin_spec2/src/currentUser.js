import React from "react";
import "./whole_page.css"
import {MdOutlineVerifiedUser} from "react-icons/md";
import { useBaseline, useMetrics } from "./hooks/api.hooks";

function CurrentUser(props){
    const heartRate = useMetrics(props.id);
    const baseline = useBaseline(props.id);

    return (
        <article
          style={{
            display: "block",
            margin: "20px",
            padding: "10px",
            background: "rgb(40,40,40)",
            color: "yellow",
            // boxShadow: "0 3px 6px 0 rgb(40,40,40), 0 6px 10px 0 rgb(40,40,40)",
            borderColor: "rgb(90,90,90)",
            borderWidth: 1,
            borderStyle: "solid",
            width: "200px",
            height: "200px",
            borderRadius: "40px",
          }}
        >
        
            <h4>{props.name}</h4>
            <p>{props.isOnline}</p>
            <p>Heart Rate: {heartRate}</p>
            <p>Base Line: {baseline}</p>
            {(heartRate - baseline > 10) ? 
              <p className = "p10"> Melt down <MdOutlineVerifiedUser/></p>
              :
              <p style={{ color: "yellow" }}> Normal </p>
            }
        </article>
      );
}
export default CurrentUser