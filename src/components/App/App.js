// import './App.css'
import LandingPage from '../LandingPage/LandingPage';
import Login from '../Login/Login';
import QuestionCard from '../QuestionCard/QuestionCard';
import QuestionsAnswered from '../QuestionsAnswered/QuestionsAnswered';
import HomePage from '../HomePage/HomePage';
import UserAccount from '../UserAccount/UserAccount';
import SavedQuestions from '../SavedQuestions/SavedQuestions';
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
          <Route path='/HomePage' element={<HomePage />} />
          <Route path='/QuestionsAnswered' element={<QuestionsAnswered/>}/>
          <Route path='/QuestionCard' element={<QuestionCard />} />
          <Route path='/UserAccount' element={<UserAccount />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/SavedQuestions' element={<SavedQuestions />} />
        </Routes>
      </BrowserRouter>
  );
}
export default App;