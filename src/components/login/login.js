import { useNavigate } from 'react-router-dom';
import './login.css';
import { useState } from 'react';

function Login() {
    const navigate = useNavigate()
    const handleLogin = () => {
        navigate("/Login")
    }
    const handleHome = () => {
        navigate("/")
    }
    const handleRegister = () => {
        navigate("/Register")
    }
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState("")
    const [emailInput, setEmailInput] = useState("")
    const [passwordinput, setPasswordInput] = useState("")

    let UserInfo =JSON.parse(localStorage.getItem("userInformation"))

    function LoginUser(){
        if(email == ''){
            setEmailInput("Enter valid Email")
        }
        else if(password == ''){
            setPasswordInput("Enter valid Password")
        }
        else{UserInfo.map(ele =>{
            console.log(email)
            console.log(password)
            console.log(UserInfo)
            if((ele.Email === email) && (ele.Password === password)){
                localStorage.setItem("currentUser",ele.Username)
                navigate("/Upload")
            }
            else{
                alert("Wrong Information !")
            }
        })}
    }
    return (
        <div className='Login'>
            <div className='navBar'>
                <div className='heading'>
                    <h1 onClick={handleHome} className='blogs'>Blog</h1>
                </div>
                <div className='navbarrightblock'>
                    <div className='linksOnNav'>
                        <a onClick={handleLogin} className='navlinks'>Login</a>
                        <a onClick={handleRegister} className='navlinks'>register</a>
                    </div>
                </div>
            </div>

            <main className='mainDiv'>
                <div className='LogininnerDiv'>
                    <div>
                        <h1 className='names'>Blogs</h1>
                        <p className='names'>Publish your passion, your way...</p>
                        <hr />
                    </div>
                    <div className='loginHeading'>
                        <h2>Login</h2>
                    </div>
                    <div>
                        <div className='InputTypes'>
                            <div>
                                <label for="Email">
                                    Email
                                </label>
                            </div>
                            <div>
                                <input onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder="test@gmail.com" name="email" id="email" className='emailInput' />
                                <div>{emailInput}</div>
                            </div>
                        </div>
                        <br />
                        <div className='InputTypes'>
                            <div>
                                <label for="Password">
                                    Password
                                </label>
                            </div>
                            <div>
                                <input onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder="test@123" name="password" id="password" className='passwordInput' />
                                <div>{passwordinput}</div>
                            </div>
                            <br />
                        </div>
                        <button onClick={LoginUser} type="submit" className='submitBtn'> Login </button>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Login