import React from "react";
import "./whole_page.css"

function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}

function formatDate(date) {
  return (
    [
      date.getFullYear(),
      padTo2Digits(date.getMonth() + 1),
      padTo2Digits(date.getDate()),
    ].join('/') +
    ' ' +
    [
      padTo2Digits(date.getHours()),
      padTo2Digits(date.getMinutes()),
      padTo2Digits(date.getSeconds()),
    ].join(':')
  );
}

function CurrentEvent(props){

    const date = new Date(props.timestamp);
    console.log(date);

    return (
        <article
          style={{
            display: "block",
            margin: "auto",
            marginTop: "10px",
            marginBottom: "20px",
            padding: "10px",
            backgroundColor: "rgb(40,40,40)",
            borderColor: "rgb(90,90,90)",
            borderWidth: 1,
            borderStyle: "solid",
            color: "yellow",
            width: "80%",
            height: "150px",
            borderRadius: "30px",
          }}
        >
          <h2>{formatDate(date)}</h2>
          <p>{props.description}</p>
      </article>

    )

}


export default CurrentEvent