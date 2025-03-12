// import './App.css'
import LandingPage from '../LandingPage/LandingPage';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Header from '../Header/Header';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
function App() {
  return (
      <BrowserRouter>
            <Header /> 
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path='/Header' element={<Header />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Register' element={<Register />} />
        </Routes>
      </BrowserRouter>
  );
}
export default App;