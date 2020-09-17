import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';
import axios from 'axios'
import * as yup from 'yup';


// setting the starting states


const initialFormValues = {
  //text inputs
  name: '',
  email: '',
  password: '',
  //checkbox
  termsOfService: '',
  //radio buttons
  experience: '',
}
const initFormErrors = {
  name: '',
  email: '',
  password: '',
  termsOfService: '',
  experience: '',

}
const initialUserList = []
const initialDisabled = true




export default function App() {
  // states 
  const [formValue, setFormValue] = useState(initialFormValues)
  const [newUser, setNewUser] = useState([initialFormValues])


  
  return (
    <div className="App">
      <form /> 
    </div>
  );
}


