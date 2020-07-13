import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {
  BrowserRouter as Router,
  useParams,
} from "react-router-dom";

function RedirectPage() {
    let { surl } = useParams();
    console.log('http://localhost:5000/' + surl)
    axios.get('http://localhost:5000/' + surl)
         .then(res => {
             const uri = res.data
             console.log(uri);
             window.location.href = uri
         })
         .catch(err => console.log(err))
}

export default RedirectPage;