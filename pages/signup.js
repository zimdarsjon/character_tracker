import Link from 'next/link'
import React from 'react';
import axios from 'axios';

const { useState } = React;

export default function Signup() {
  const [error, setError] = useState('');
  const [formFields, setFormFields] = useState({
    username: '',
    password: '',
    validationPassword: '',
    email: ''
  });

  const handleChange = (e) => {
    setError('');
    setFormFields({ ...formFields, [e.target.name]: e.target.value })
  }

  const submit = (e) => {
    e.preventDefault();
    if (formFields.password !== formFields.validationPassword) {
      setError('Passwords do not match');
      return;
    }
    axios.post('/api/user', formFields)
      .catch(err => {
        if (err.response.data.message) {
          setError(err.response.data.message);
        }
      })
  }

  return (
    <div>
      <form onSubmit={submit}>
        <h1>Signup</h1>
        <input type='text' placeholder='username' name='username' value={formFields.username} onChange={handleChange}></input>
        <input type='text' placeholder='email' name='email' value={formFields.email} onChange={handleChange}></input>
        <input type='password' placeholder='password' name='password' value={formFields.password} onChange={handleChange}></input>
        <input type='password' placeholder='password' name='validationPassword' value={formFields.validationPassword} onChange={handleChange}></input>
        <button>Sign Up</button>
      </form>
      <p>{error}</p>
      <Link href='/login'>
        Back to login
      </Link>
    </div>
  )
}