import { useNavigate } from 'react-router-dom';
import './Header.css'

function Header(){
    const navigate = useNavigate()
    // const loggedin - localStorage.getItem("isLoggedin")
    return(
        <div className='Header'>
            {/* <div className='HeaderMain'> */}
                <div className='HeaderName'>
                    <div className='HTitle'>Ask-Net</div>
                </div>

                {localStorage.getItem("isLoggedIn") ? 
                <div>
                    <button onClick={()=>{navigate('/UserAccount')}} className='HButtonLogin HButton'>User Account</button>
                    <button onClick={()=>{localStorage.clear(); navigate('/Login')}} className='HButtonSignUp HButton'>Logout</button>
                </div>
                :
                <div className='HButtons'>
                    <button onClick={()=>{navigate('/Login')}} className='HButtonLogin HButton'>Login</button>
                    <button onClick={()=>{navigate('/Register')}} className='HButtonSignUp HButton'>Sign Up</button>
                </div> 
                }
            {/* </div> */}
        </div>
    )
}

export default Header;