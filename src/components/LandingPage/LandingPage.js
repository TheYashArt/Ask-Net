import './LandingPage.css';
import Header from '../Header/Header';
import { useNavigate } from 'react-router-dom';

function LandingPage(){
    const naviagate = useNavigate()
    return(
        <div className="LandingPage">
            <div className='LPMainDiv'>
                <div className='LPImage'>
                    <div className='LPTitle'>
                        <div className='LPTitleText'>ASK-NET</div>
                        <div className='LPTitleSubText'>A place to ask and answer questions</div>
                    </div>
                    <div className='LPPostDiv'>
                        <div className='LPPostContent'>
                            <button className='LPPostButton'>Post a Question</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default LandingPage;