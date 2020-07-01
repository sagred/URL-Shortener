import React, {useState} from 'react';
import axios from 'axios'
import './App.css';

function App() {

  const [url, setUrl] = useState('')
  const [surl, setSurl] = useState('')
  const [rurl, sRurl] = useState('')
  const [list, setList] = useState(false)
  const [error, setError] = useState(false)


  const uri = 'http://localhost:5000/'

  const shortenURL = (e) => {
    e.preventDefault();
    const urldata = {
      url:url,
      shortUrl:surl
    }
  
    axios.post(uri,urldata)
         .then(res => console.log(res.data))
         .catch(err => console.log('Error:' + err))
         .then(sRurl(uri + surl),setList(true))
         .then(setUrl(''),setSurl(''))
  }

  const verification = (e) => {
    setSurl(e.target.value)
    let value = e.target.value
     axios.get(uri+'find/'+ e.target.value)
         .then(res => {
            if(res.data === value) {
              setError(true)
            }
         })
         .catch(err => {
            setError(false)
            console.log(err)
          })
  }

  return (
    <div className="App">
      <h1 className = 'heading'>URL SHORTENER</h1>
      <form className = 'form' onSubmit = {shortenURL}>
        <label className = 'urlLabel'>Enter URL: </label>
        <input className = 'urlInput'
               placeholder = 'Enter URL to shorten...' 
               value = {url}
               type = ''url required autoFocus
               onChange = {(e) => setUrl(e.target.value)}
        />
        <label className = 'shortUrlLabel'>Enter Short URL: </label>
       {error? <p style = {{color:'red'}}>! Already exists</p> :null}
        <input className = 'shortUrlInput' 
               placeholder = 'Enter Shorter URL ...'
               value = {surl} 
               type = ''url required
               onChange = {verification}
        />
        
        <button className = 'formSubmit'>Submit</button>
      </form>
      {list?<div className = 'linkList'>
      
        <h3 className = 'listurl'>Your short URL is :{rurl}</h3>
      </div>
      :null}
    </div>
  );
}

export default App;
