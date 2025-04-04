import { useState } from 'react';
import './AnswerUpload.css'
import axios from 'axios';

function AnswerUpload(){
    const [answer, setAnswer] = useState("");
    function saveans (){
        axios.post("http://localhost:4200/Answers/",{
            AnswerString : answer
        }).then((Response)=>{
            console.log(Response);
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    return(
        <div className='QuestionUpload'>
            <div className='QuestionUploadMainDiv'>
                <div className='QuestionUploadTitle'>
                    Question Title
                </div>

                <div className='QuestionUploadSummury'>
                    Answer the Question
                </div>

                <div className='QuestionUploadSummuryInput'>
                    <textarea onChange={(e)=>{setAnswer(e.target.value)}} rows={10} cols={89}/>
                </div>

                <div className='QuestionUploadButton'>
                    <button onClick={saveans} className='UploadBtn'>Upload</button>
                </div>
            </div>
        </div>
    )
}

export default AnswerUpload;