import React, {useState} from 'react';

function App() { 

  // Passing in an object to store each input field from the form.
  const [input, setInput] = useState({
    sessionName: "",
    sessionDate: "",
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
    console.log(input);
  }

  return (
      <form onSubmit = {handleSubmit}>
        <h1>This is the session</h1>
        <h2>What is the session name?</h2>
        <input type = 'text' placeholder = 'Benjamin Franklin Middle School' name = 'sessionName' onChange = {handleInput}/>
        <h2>What is today's date?</h2>
        <input type = 'text' placeholder = '10/21/2022' name = 'sessionDate' onChange = {handleInput}/>
        <h2>What is the location or environment?</h2>
        <input type = "text" placeholder = 'Classroom' name = 'sessionLocation' onChange = {handleInput}/>
        <h2>How is the lighting in the environment?</h2>
        <textarea placeholder='Very bright' name = 'sessionLighting' onChange = {handleInput}></textarea>
        <h2>What is the sound like in the environment?</h2>
        <textarea placeholder='Today the music will be loud' name = 'sessionSound' onChange = {handleInput}></textarea>
        <h2>Additional environment notes?</h2>
        <textarea placeholder='The room smells like cleaning products' name = 'additionalSessionNotes' onChange = {handleInput}></textarea>
        <br></br>
        <button type = 'submit'>Submit</button>
      </form>
  );
}

export default App;