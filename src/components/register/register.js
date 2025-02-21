import { useNavigate } from 'react-router-dom';
import './register.css';
import { useState } from 'react';

function Register() {
    const navigate = useNavigate()
    const handleLogin = ()=>{
        navigate("/Login")
    }
    const handleRegister = () =>{
        navigate("/Register")
    }
    const handleHome = () =>{
        navigate("/")
    }

    const [email,setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")

    let UserInfo = []

    function UserAdd(){
        if(email == "" || password == "" ){
            alert("please fill all the input fields!")
            // navigate("/Register")
        }
        else{UserInfo.push({
            Username : name,
            Email : email,
            Password : password
        })

        console.log(UserInfo)

        localStorage.setItem("userInformation",JSON.stringify(UserInfo))

        navigate("/Login")}
    }

    return (
        <div className='Register'>
            <div className='RegisternavBar'>
                <div className='Registerheading'>
                    <h1 onClick={handleHome} className='Registerblogs'>Blog</h1>
                </div>
                <div className='Registernavbarrightblock'>
                    <div className='RegisterlinksOnNav'>
                        <a onClick={handleLogin} className='Registernavlinks'>Login</a>
                        <a onClick={handleRegister} className='Registernavlinks'>register</a>
                    </div>
                </div>
            </div>

            <div className='RegistermainDiv'>
                <div className='RegisterinnerDiv'>
                    <div className='Registerblogs'>
                        Blogs
                    </div>
                    <br />
                    <div>
                        Publish your passion, your way...
                    </div>
                    <hr />
                    <div className='Registerregister'>
                        Register
                    </div>
                    <div className='Registerform'>
                        <label for="name">Name</label>
                        <input onChange={(e)=>{setName(e.target.value)}} type="text" name="uname" id="name" placeholder="first name Last name" />
                        <br />
                        <label for="email">Email</label>
                        <input onChange={(e)=>{setEmail(e.target.value)}} type="email" name="email" id="email" placeholder="test@gmail.com"  />
                        <br />
                        <label for="pass">Password</label>
                        <input onChange={(e)=>{setPassword(e.target.value)}} type="password" name="pass" id="pass" placeholder="test@123" />
                    </div>
                    <button onClick={UserAdd} className='RegisterfooterRegister'>
                        Register
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Register