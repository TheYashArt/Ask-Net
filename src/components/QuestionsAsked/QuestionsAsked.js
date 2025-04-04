import './QuestionsAsked.css'
import QuestionCard from '../QuestionCard/QuestionCard'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import axios from 'axios';

function QuestionsAsked(){
    const userdata = JSON.parse(localStorage.getItem('user'));
    const navigate = useNavigate()
    const Questions = [
        {Title:"Question 1", Summury : "This is Question One", Answers: 5},
        {Title:"Question 2", Summury : "This is Question Two", Answers: 10},
        {Title:"Question 3", Summury : "This is Question Three", Answers: 15},
        {Title:"Question 4", Summury : "This is Question Four", Answers: 20},
    ]
    useEffect(()=>{
        if(!userdata){
            navigate('/Login')
        }

        // axios.get("http://localhost:4200/UserInformation",)

    },[])
    return (
        <div className='QuestionsAsked'>
            <div className='UploadQuestion'>
                <button className='UploadQuestionButton' onClick={() => navigate('/QuestionUpload')}>Post your Question</button>
            </div>
            {Questions.map((Question) => {
                return <div className='SavedQuestion'>
                    <QuestionCard inUserAccount={true} summurywidth='800px' width='850px' Title={Question.Title} Summury={Question.Summury} AnswerCount={Question.Answers}/>
                </div>
            })}
        </div>
    )
}

export default QuestionsAsked;
