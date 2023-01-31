import Link from 'next/link'

export default function Signup() {
  return (
    <div>
      <form>
        <h1>Signup</h1>
        <input type='text' placeholder='username'></input>
        <input type='text' placeholder='email'></input>
        <input type='password' placeholder='password'></input>
        <input type='password' placeholder='password'></input>
        <button>Sign Up</button>
      </form>
      <a>
        <Link href='/login'>
          Back to login
        </Link>
      </a>
    </div>
  )
}