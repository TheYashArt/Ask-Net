import {useEffect, useState } from 'react'
import './Register.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Register(){
    const Navigate = useNavigate()
    const [registerInformation,setRegisterInformation]= useState({
        UserName : "",
        Password : ""
    })

    const handlechange=(event)=>{
        const {name,value} = event.target;
        setRegisterInformation((prevdata)=>({
            ...prevdata,[name]:value
        }))
    }

    function display(){
        setDataToDB()
        Navigate("/Login")
        console.log(registerInformation)
        
    }

    function setDataToDB(){
        axios.post('http://localhost:4200/UserInformation',registerInformation)
        .then(response=>{
            console.log("data updated",response.data)
        }).catch(err=>{
            console.log("error",err)
        })
    }

    return(
        <div className='Register'>
            <div className='RegisterVertical'>
                <div className='RegisterBlock'>
                    <div className='RegisterText'>
                        <div>Register</div>
                    </div>
                        <label for='username'>Username</label>
                        <input name='UserName' onChange={handlechange} id='username' className='RegisterInput' type='email' placeholder='Username'/>
                        <label for='password'>Password</label>

                        <input name='Password' onChange={handlechange} id='password' className='RegisterInput' type='password' placeholder='Password'/>
                        <label for='password'>confirm Password</label>
                        
                        <input name='ConfirmPassword' onChange={handlechange} id='password' className='RegisterInput' type='password' placeholder='confirm Password'/>
                        <button onClick={display} className='RegisterButton'>Register</button>
                    <p>Don't have an account? <a onClick={()=>{Navigate('/Login')}}>Login</a></p>
                </div>
            </div>
        </div>
    )
}

export default Register