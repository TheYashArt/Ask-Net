import './UserAccount.css';
import { useState } from 'react';
import UserProfile from '../UserProfile/UserProfile';

function UserAccount(){
    const [sideBarContent, setSideBarContent] = useState('');
    const content = ["Profile", "Questions Asked", "Questions Answered", "Saved Questions", "FAQ"];
    console.log(sideBarContent);

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
                <div className='UseAccountRightMainDiv'>
                    {sideBarContent === 'Profile' && <UserProfile />}
                </div>  
        </div>
    )
}

export default UserAccount;