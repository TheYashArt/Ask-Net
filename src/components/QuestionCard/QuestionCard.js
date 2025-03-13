import './QuestionCard.css';
import image from '../../Assets/ProfilePage.png';

function QuestionCard({Title, Summury, AnswerCount}){
    return(
        <div className='QuestionCard'>
            <div className='QuestionCardMain'>
                <div className='QustionCardPostUserDiv'>
                    <img width={'30px'} src={image} alt='Profile' className='QuestionCardProfile'/>
                    <div className='QuestionPostUSer'>UserName</div>
                </div>
                <div className='QuestionCardTitle'>
                    <div>{Title}</div>
                </div>
                <div className='QuestionSummuryDiv'>
                    {Summury}
                </div>
                <div className='AnswerCount'>
                    {AnswerCount} Answers
                </div>
            </div>
        </div>
    )
}

export default QuestionCard;