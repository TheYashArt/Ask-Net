import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/hoempage/homepage"
import Login from "./components/login/login"
import Display from "./components/display_blog/display"
import Register from "./components/register/register"
import Upload from "./components/upload_blog/upload"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/Display" element={<Display/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path="/Upload" element={<Upload/>}/>
      </Routes>
    </Router>
  );
}

export default App;