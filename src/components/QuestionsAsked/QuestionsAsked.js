import './QuestionsAsked.css'
import QuestionCard from '../QuestionCard/QuestionCard'

function QuestionsAsked(){
    const Questions = [
        {Title:"Question 1", Summury : "This is Question One", Answers: 5},
        {Title:"Question 2", Summury : "This is Question Two", Answers: 10},
        {Title:"Question 3", Summury : "This is Question Three", Answers: 15},
        {Title:"Question 4", Summury : "This is Question Four", Answers: 20},
    ]
    return (
        <div className='QuestionsAsked'>
            {Questions.map((Question) => {
                return <div className='SavedQuestion'>
                    <QuestionCard summurywidth='800px' width='850px' Title={Question.Title} Summury={Question.Summury} AnswerCount={Question.Answers}/>
                </div>
            })}
        </div>
    )
}

export default QuestionsAsked;
