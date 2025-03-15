import './QuestionCard.css';
import image from '../../Assets/ProfilePage.png';

function QuestionCard({summurywidth,width, Title, Summury, AnswerCount}){
    return(
        <div className='QuestionCard'>
            <div className='QuestionCardMain' style={{
                width:width,
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
                padding:'20px 30px',
                backgroundColor:'rgb(180, 180, 180)',
                borderRadius : '10px'
                }}>
                <div className='QustionCardPostUserDiv'>
                    <img width={'30px'} src={image} alt='Profile' className='QuestionCardProfile'/>
                    <div className='QuestionPostUSer'>UserName</div>
                </div>
                <div className='QuestionCardTitle'>
                    <div>{Title}</div>
                </div>
                <div style={{width:summurywidth}} className='QuestionSummuryDiv'>
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