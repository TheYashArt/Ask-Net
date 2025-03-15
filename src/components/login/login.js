import { useEffect, useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Login(){
    const Navigate = useNavigate()
    const [LoginInformation,setLoginInformation] = useState({
        UserName: "",
        Password : ""
    })

    const handlechange=(event)=>{
        const {name,value} = event.target;
        setLoginInformation((prevdata)=>({...prevdata,[name]:value}))
    }

    function display(){
        console.log(LoginInformation)
    }

    
    return(
        <div className='Login'>
            <div className='LoginVertical'>
                <div className='LoginBlock'>
                    <div className='LoginText'>
                        <div>Login</div>
                    </div>
                        <label for='username'>Username</label>
                        <input onChange={handlechange} value={LoginInformation.UserName} id='username' name='UserName' className='LoginInput' type='email' placeholder='Username'/>

                        <label for='password'>Password</label>
                        <input onChange={handlechange} value={LoginInformation.Password} id='password' name='Password' className='LoginInput' type='password' placeholder='Password'/>
                        
                        <button onClick={display} className='LoginButton'>Login</button>
                    <p>Don't have an account? <a onClick={()=>{Navigate('/Register')}} >Register</a></p>
                </div>
            </div>
        </div>
    )
}

export default Login