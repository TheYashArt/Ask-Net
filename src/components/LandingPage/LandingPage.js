import './LandingPage.css';
import Header from '../Header/Header';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { useEffect, useState } from 'react';

function LandingPage(){
    const navigate = useNavigate()
    useEffect(()=>{
        getdbdata();
    },[])

    function getdbdata(){
        axios.get('http://localhost:4200/UserInformaton')
        .then(response=>{
            console.log(response.data)
        }).catch(err=>{
            console.log(err.status)
        })
            
    }
    
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
                            <button className='LPPostButton' onClick={()=>{navigate("/QuestionUpload")}}>Post a Question</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default LandingPage;