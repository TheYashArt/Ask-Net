import './HomePage.css';
import QuestionCard from '../QuestionCard/QuestionCard';

function HomePage(){
    const Questions = [
        {Title:"Question 1", Summury : "This is Question One", Answers: 5},
        {Title:"Question 2", Summury : "This is Question Two", Answers: 10},
        {Title:"Question 3", Summury : "This is Question Three", Answers: 15},
        {Title:"Question 4", Summury : "This is Question Four", Answers: 20},
    ]
    return(
        <div className='HomePage'>
            <div className='HomeSearchBar'>
                <div className='HomeSearchBarTitle'>
                    <i class="fa fa-search" aria-hidden="true"></i>
                    <input type='text' placeholder='Search for questions' className='SearchBar'/>
                </div>
            </div>

            <div className='HomeQuestions'>
                {Questions.map((Question) => {
                    
                    return <div className='HomeQuestion'>
                        <QuestionCard Title={Question.Title} Summury={Question.Summury} AnswerCount={Question.Answers}/>
                    </div>
                })}
            </div>
        </div>
    )
}
export default HomePage;