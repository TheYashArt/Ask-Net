import { useNavigate } from 'react-router-dom';
import './homepage.css';
import { useState } from 'react';

function Home() {

    const navigate = useNavigate()
    const handleLogin = () =>{
        navigate("/Login")
    }

    const handleRegister = () =>{
        navigate("/Register")
    }

  return (
    <div className="Home">
      <header>
        <div className='navBar'>
          <div className='heading'>
            <h1 className='blogs'>Blog</h1>
          </div>
          <div className='navbarrightblock'>
            <div className='linksOnNav'>
              <a onClick={handleLogin} className='navlinks'>Login</a>
              <a onClick={handleRegister} className='navlinks'>register</a>
            </div>
          </div>
        </div>
      </header>
      <div className='mainDiv'>
        <div className='innerDiv'>
          <div>
            <h1>Blogs!</h1>
            <p>publish you passion, your way....</p>
          </div>
          <div className='buttons'>
            <button onClick={handleLogin} className='loginButton'>Login</button>
            <button onClick={handleRegister} className='registerButton'>Register</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;