import './UserAccount.css';
import { useEffect, useState } from 'react';
import UserProfile from '../UserProfile/UserProfile';
import SavedQuestions from '../SavedQuestions/SavedQuestions';
import QuestionCard from '../QuestionCard/QuestionCard';
import QuestionsAnswered from '../QuestionsAnswered/QuestionsAnswered';
import QuestionsAsked from '../QuestionsAsked/QuestionsAsked';

function UserAccount(){
    const [userd, setUserd] = useState()
    useEffect(()=>{
        setUserd(JSON.parse(localStorage.getItem('user')));
        console.log("userd from userAccount"+userd)
    },[])



    const [sideBarContent, setSideBarContent] = useState('Profile');
    const content = ["Profile", "Questions Asked", "Questions Answered", "Saved Questions"];
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
                    {sideBarContent === 'Profile' && <UserProfile userInfo = {userd} />}
                    </div>
                    <div>
                    {sideBarContent==='Saved Questions' && <SavedQuestions userInfo = {userd}/>}
                    </div>
                    <div>
                    {sideBarContent==='Questions Answered' && <QuestionsAnswered userInfo = {userd}/>}
                    </div>
                    <div>
                    {sideBarContent==='Questions Asked' && <QuestionsAsked userInfo = {userd} />}
                    </div>
                </div>  
            </div>
        </div>
    )
}

export default UserAccount;