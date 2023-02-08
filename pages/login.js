import Link from 'next/link';
import React from 'react';
import axios from 'axios';
import { signIn } from 'next-auth/react';
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";

const { useState } = React;
export default function Login() {
  const router = useRouter();
  const [error, setError] = useState('');
  const [formFields, setFormFields] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    setError('');
    setFormFields({ ...formFields, [e.target.name]: e.target.value })
  }

  const submit = async (e) => {
    e.preventDefault();
    const res = await signIn('credentials', {
      ...formFields,
      redirect: false
     });

    if (res?.error) {
      setError(res.error)
    } else {
      router.push('/');
    }

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

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }
  return {
    props: { session }
  }
}