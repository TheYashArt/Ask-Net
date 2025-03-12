import './Login.css'
import { useNavigate } from 'react-router-dom'

function Login(){
    const Navigate = useNavigate()
    return(
        <div className='Login'>
            <div className='LoginVertical'>
                <div className='LoginBlock'>
                    <div className='LoginText'>
                        <div>Login</div>
                    </div>
                        <label for='username'>Username</label>
                        <input id='username' className='LoginInput' type='email' placeholder='Username'/>
                        <label for='password'>Password</label>
                        <input id='password' className='LoginInput' type='password' placeholder='Password'/>
                        <button className='LoginButton'>Login</button>
                    <p>Don't have an account? <a onClick={()=>{Navigate('/Register')}}>Register</a></p>
                </div>
            </div>
        </div>
    )
}

export default Login