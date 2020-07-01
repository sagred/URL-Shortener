import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className = 'heading'>URL SHORTENER</h1>
      <form className = 'form'>
        <label className = 'urlLabel'>Enter URL: </label>
        <input className = 'urlInput' placeholder = 'Enter URL to shorten...' type = ''url required autoFocus/>
        <label className = 'shortUrlLabel'>Enter Short URL: </label>
        <input className = 'shortUrlInput' placeholder = 'Enter Shorter URL ...' type = ''url required/>
        <button className = 'formSubmit'>Submit</button>
      </form>
      <div className = 'linkList'>
        <a href = '#'>http://sagred.tech</a>
      </div>
    </div>
  );
}

export default App;
