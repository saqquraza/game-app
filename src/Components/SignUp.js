import React,{useState} from 'react'

function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const formHandler=(e)=>{
            e.preventDefault();
            localStorage.setItem('user',JSON.stringify({email,password}))
            setEmail('');
            setPassword('');
    }

   

  return (
    <div>
         <form onSubmit={formHandler}>
            <input type='email' placeholder="Enter Your Email" onChange={(e)=>setEmail(e.target.value)} value={email}></input>
            <input type='password'  placeholder="Enter Your Password" onChange={(e)=>setPassword(e.target.value)} value={password}></input>
            <button type="submit">Sign Up</button>
        </form>
    </div>
  )
}

export default SignUp