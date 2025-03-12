import './Register.css'
import { useNavigate } from 'react-router-dom'

function Register(){
    const Navigate = useNavigate()
    return(
        <div className='Register'>
            <div className='RegisterVertical'>
                <div className='RegisterBlock'>
                    <div className='RegisterText'>
                        <div>Register</div>
                    </div>
                        <label for='username'>Username</label>
                        <input id='username' className='RegisterInput' type='email' placeholder='Username'/>
                        <label for='password'>Password</label>
                        <input id='password' className='RegisterInput' type='password' placeholder='Password'/>
                        <label for='password'>confirm Password</label>
                        <input id='password' className='RegisterInput' type='password' placeholder='confirm Password'/>
                        <button className='RegisterButton'>Register</button>
                    <p>Don't have an account? <a onClick={()=>{Navigate('/Login')}}>Login</a></p>
                </div>
            </div>
        </div>
    )
}

export default Register