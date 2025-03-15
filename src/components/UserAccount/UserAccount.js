import './UserAccount.css';
import { useState } from 'react';
import UserProfile from '../UserProfile/UserProfile';
import SavedQuestions from '../SavedQuestions/SavedQuestions';
import QuestionCard from '../QuestionCard/QuestionCard';
import QuestionsAnswered from '../QuestionsAnswered/QuestionsAnswered';
import QuestionsAsked from '../QuestionsAsked/QuestionsAsked';

function UserAccount(){
    const [sideBarContent, setSideBarContent] = useState('Profile');
    const content = ["Profile", "Questions Asked", "Questions Answered", "Saved Questions"];
    const Questions = [
        {Title:"Question 1", Summury : "This is Question One", Answers: 5},
        {Title:"Question 2", Summury : "This is Question Two", Answers: 10},
        {Title:"Question 3", Summury : "This is Question Three", Answers: 15},
        {Title:"Question 4", Summury : "This is Question Four", Answers: 20},
    ]
    // let rightmain = </>
    return(
        <div className='UserAccount'>
            <div className='UserAccountSideBar'>
                {content.map((SingleContent)=>{
                    return <div 
                    key={SingleContent}
                    onClick={() => setSideBarContent(SingleContent)} 
                    style={{
                        padding: '10px 20px',
                        textAlign: 'center',
                        borderRadius: '5px',
                        margin: '5px 0px',
                        backgroundColor: sideBarContent === SingleContent ? 'rgb(99,106,232)' : 'rgb(222,225,230)',
                        color: sideBarContent === SingleContent ? 'white' : 'black',
                        fontWeight : sideBarContent === SingleContent ? 'bold' : 'normal',
                    }} 
                    className='UserAccountSideBarContent'>
                        {SingleContent}
                    </div>
                })}

            </div>
            <div className='UserAccountRightMain'>
            <div className='HiddenDiv'></div>
                <div className='UseAccountRightMainDiv'>
                    <div>
                    {sideBarContent === 'Profile' && <UserProfile />}
                    </div>
                    <div>
                    {sideBarContent==='Saved Questions' && <SavedQuestions/>}
                    </div>
                    <div>
                    {sideBarContent==='Questions Answered' && <QuestionsAnswered/>}
                    </div>
                    <div>
                    {sideBarContent==='Questions Asked' && <QuestionsAsked/>}
                    </div>
                </div>  
            </div>
        </div>
    )
}

export default UserAccount;