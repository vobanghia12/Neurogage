import React, {useState} from 'react';
import { createSession, createEvent } from "../hooks/api.hooks";
import Header from "../components/Header";
import {Video} from "../video";

export default function SessionSubmit() { 

  const [userId, setUserId] = useState(null);

  const [helpMessage, setHelpMessage] = useState(null);

  // Passing in an object to store each input field from the form.
  const [input, setInput] = useState({
    userName: "",
    sessionName: "",
    sessionLocation: "",
    sessionLighting: "",
    sessionSound: "",
    additionalSessionNotes: ""
  });

  // This function will be called on every input field
  const handleInput = (e) => {
    const {name, value} = e.target;
    setInput ((prev) => {
      return {...prev, [name]: value};
    });
  };

  /* 
    In the event that the submit button changes state,
    send the data to the server.
  */
  const handleSubmit = (e) => {
    e.preventDefault();
    createSession(
      input.userName, 
      70, 
      input.sessionName, 
      input.sessionLocation, 
      input.sessionLighting, 
      input.sessionSound, 
      input.additionalSessionNotes
    ).then(r => setUserId(r.data.session.userId));
  }

  return (
    <>
      {userId === null ?
          <form className="form" onSubmit = {handleSubmit}>
            <h1>Start a session!</h1>
            <h2>Who is the session for?</h2>
            <input className="inputs" type = 'text' placeholder = 'Jacob' name = 'userName' onChange = {handleInput}/>
            <h2>What is the session name?</h2>
            <input className="inputs" type = 'text' placeholder = 'Benjamin Franklin Middle School' name = 'sessionName' onChange = {handleInput}/>
            <h2>What is the location or environment?</h2>
            <input className="inputs" type = "text" placeholder = 'Classroom' name = 'sessionLocation' onChange = {handleInput}/>
            <h2>How is the lighting in the environment?</h2>
            <textarea className="inputs" placeholder='Very bright' name = 'sessionLighting' onChange = {handleInput}></textarea>
            <h2>What is the sound like in the environment?</h2>
            <textarea className="inputs" placeholder='Today the music will be loud' name = 'sessionSound' onChange = {handleInput}></textarea>
            <h2>Additional environment notes?</h2>
            <textarea className="inputs" placeholder='The room smells like cleaning products' name = 'additionalSessionNotes' onChange = {handleInput}></textarea>
            <br></br>
            <button type = 'submit'>Submit</button>
          </form>
          :
          <>
            {helpMessage === null ?
                <>
                  <h2 style={{ fontSize: 30 }}> Try Out Facial Monitoring!</h2>
                  <Video userId={userId}/>
                  <h2 style={{ fontSize: 30 }}> Click for help!</h2>
                  <button 
                    className="large-button" 
                    onClick={() => {
                      createEvent(userId, "Experiencing visual overflow");
                      setHelpMessage("Closing your eyes will help.");
                    }}
                  >
                    Too much light
                  </button>
                  <button 
                    className="large-button" 
                    onClick={() => {
                      createEvent(userId, "Experiencing auditory overflow")
                      setHelpMessage("Try to imagine a quiet room.");
                    }}
                  >
                    Too much sound
                  </button>
                  <button 
                    className="large-button" 
                    onClick={() => {
                      createEvent(userId, "Experiencing information overflow")
                      setHelpMessage("If you're having a tough time, touch the area.");
                    }}
                  >
                    Too information
                  </button>
                </>
                :
                <>
                  <h2 className="HelpMessage" style={{ color: "white" }}>
                    { helpMessage }
                  </h2>
                </>
            }
           
          </>
      }
    </>
      
  );
}