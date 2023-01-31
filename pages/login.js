import Link from 'next/link';
import React from 'react';

const { useState } = React;
export default function Login() {
  const [error, setError] = useState('');
  const [formFields, setFormFields] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    setError('');
    setFormFields({ ...formFields, [e.target.name]: e.target.value })
  }

  const submit = (e) => {
    e.preventDefault();
    console.log(formFields);
  }

  return (
    <div>
      <form onSubmit={submit}>
        <h1>Login</h1>
        <input type='text' placeholder='username' name='username' onChange={handleChange} value={formFields.username}></input>
        <input type='password' placeholder='password' name='password' onChange={handleChange} value={formFields.password}></input>
        <button>Login</button>
        <p>{error}</p>
      </form>
      <Link href='/signup'>
        Not a user? Sign Up
      </Link>
    </div>
  )
}