import { useEffect, useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const Navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function display() {
    console.log(username, password);
    checkData(username, password);
  }

  useEffect(() => {
    localStorage.clear();
  },[])

  const checkData = (username, password) => {
    axios
      .get("http://localhost:4200/UserInformation")
      .then((response) => {
        const data = response.data;
        const user = data.find(
          (user) => user.UserName === username && user.Password === password
        );
        if (user) {
          localStorage.setItem("user", JSON.stringify(user));
          localStorage.setItem("isLoggedIn", true);
          Navigate("/UserAccount");
        } else {
          setErrorMsg("Invalid username or password");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <div className="Login">
      <div className="LoginVertical">
        <div className="LoginBlock">
          <div className="LoginText">
            <div>Login</div>
          </div>
          <label for="username">Username</label>
          <input
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            id="username"
            name="UserName"
            className="LoginInput"
            type="email"
            placeholder="Username"
          />

          <label for="password">Password</label>
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            id="password"
            name="Password"
            className="LoginInput"
            type="password"
            placeholder="Password"
          />

          <button onClick={display} className="LoginButton">
            Login
          </button>
          <div className="erromsg">{errorMsg}</div>
          <p>
            Don't have an account?{" "}
            <a
              onClick={() => {
                Navigate("/Register");
              }}
            >
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
