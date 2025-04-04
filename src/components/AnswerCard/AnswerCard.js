import './AnswerCard.css'

function AnswerCard({AnswerUserProfile,AnswerUserByUSer,MainAnswer}){
    return(
        <div className='AnswerCard'>
            <div className='AnswerCardMainDiv'>
                <div className='UploadedBy'>
                    <div>
                    {AnswerUserProfile} 
                    </div>
                    <div className='UploadedByName'>
                        {AnswerUserByUSer}
                    </div>
                </div>
                <div className='MainAnswer'>
                    {MainAnswer}
                </div>
            </div>
        </div>
    )
}
export default AnswerCard;