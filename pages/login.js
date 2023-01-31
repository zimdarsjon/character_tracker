import Link from 'next/link';
import React from 'react';

const { useState } = React;
export default function Login() {
  const [error, setError] = useState('');
  const [formFields, setFormFields] = useState({
    username: '',
    password: ''
  });

  return (
    <div>
      <form>
        <h1>Login</h1>
        <input type='text' placeholder='username'></input>
        <input type='password' placeholder='password'></input>
        <button>Login</button>
        <p>{error}</p>
      </form>
      <a>
        <Link href='/signup'>
          Not a user? Sign Up
        </Link>
      </a>
    </div>
  )
}