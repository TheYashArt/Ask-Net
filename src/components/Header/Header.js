import { useNavigate } from 'react-router-dom';
import './Header.css'

function Header(){
    const navigate = useNavigate()
    return(
        <div className='Header'>
            {/* <div className='HeaderMain'> */}
                <div className='HeaderName'>
                    <div className='HTitle'>Ask-Net</div>
                </div>
                <div className='HButtons'>
                    <button onClick={()=>{navigate('/Login')}} className='HButtonLogin HButton'>Login</button>
                    <button onClick={()=>{navigate('/Register')}} className='HButtonSignUp HButton'>Sign Up</button>
                </div>
            {/* </div> */}
        </div>
    )
}

export default Header;