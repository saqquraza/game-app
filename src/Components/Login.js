import React,{useState} from 'react'
import SignUp from './SignUp'

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const formHandle=()=>{
        const data=localStorage.getItem('user')
        console.log(data)

    }

    // console.log(email , password)

  return (
    <div>
       <button><SignUp/></button> 
       <hr></hr>
        <form onSubmit={formHandle} >
            <input type={'email'} placeholder="Enter Your Email" onChange={(e)=>setEmail(e.target.value)} value={email}></input>
            <input type={'password'}  placeholder="Enter Your Password" onChange={(e)=>setPassword(e.target.value)} value={password}></input>
            <button type='submit'>Login</button>
        </form>
    </div>
  )
}

export default Login