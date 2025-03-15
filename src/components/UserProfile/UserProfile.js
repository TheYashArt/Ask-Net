import './UserProfile.css';
import image from '../../Assets/ProfilePage.png'

function UserProfile(){
    const FirstName = 'Yash'
    const LastName = 'Shelke'
    const Email = 'shelkey859@gmail.com'
    const QuestionAsked = 10
    const QuestionAswered = 5
    return(
        <div className='UserProfile'>
            <div className='UserProfileMainDiv'>
                <div className='UserProfileImageDiv'>
                    <img width={'150px'} src={image} alt='Profile' className='UserProfileImage'/>
                </div>
                <div className='UserProfileDetailsDiv'>
                    <div className='UserProfileName'>
                        <div className='UserProfileNameLabel'>
                            <div className='UserNamelabel'>
                                First Name
                            </div>
                            <div className='UserName'>
                                <input type='text' className='UserNameInput' placeholder={FirstName}/>
                            </div>
                        </div>

                        <div className='UserProfileNameLabel'>
                            <div className='UserNamelabel'>
                                Last Name
                            </div>
                            <div className='UserName'>
                                <input type='text' className='UserNameInput' placeholder={LastName}/>
                            </div>
                        </div>
                    </div>


                    <div className='UserProfileName'>
                        <div className='UserProfileNameLabel'>
                            <div className='UserNamelabel'>
                                Email
                            </div>
                            <div className='UserName'>
                                <input type='text' className='UserNameInput' placeholder={Email}/>
                            </div>
                        </div>

                        <div className='UserProfileNameLabel'>
                            <div className='UserNamelabel'>
                                Last Name
                            </div>
                            <div className='UserName'>
                                <input type='text' className='UserNameInput' placeholder={LastName}/>
                            </div>
                        </div>
                    </div>

                    <div className='UserProfileName'>
                        <div className='UserProfileQuestionsDiv'>
                            <div className='UserNameLabel'>
                                Total Question Asked
                            </div>
                            <div className='UserNameLabel QuestionAsked'>
                                {QuestionAsked}
                            </div>
                        </div>

                        <div className='UserProfileQuestionsDiv'>
                            <div className='UserNameLabel'>
                                Total Question Asked
                            </div>
                            <div className='UserNameLabel QuestionAsked'>
                                {QuestionAswered}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile;