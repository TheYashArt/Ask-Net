import './QuestionDisplay.css'
import QuestionCard from '../QuestionCard/QuestionCard'
import AnswerCard from '../AnswerCard/AnswerCard';

function QuestionDisplay(){
    return(
        <div className='QuestionDisplay'>
            <div className='QuestionCardDisplay'>
                <QuestionCard summurywidth={'750px'} width={'800px'} Title={"Question 1"} Summury={"Question 1 Summury"}/>
            </div>
            <div className='AnswerCardDisplay'>
                <AnswerCard AnswerUserProfile={'Yash'} AnswerUserByUSer={"Shelke"} MainAnswer={"Here is the main Answer"}/>
            </div>
        </div>
    )
}

export default QuestionDisplay;