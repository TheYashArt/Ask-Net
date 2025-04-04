import "./QuestionUpload.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

function QuestionUpload() {
  const navigate = useNavigate();
  const [userd, setUserd] = useState()
    useEffect(()=>{
        setUserd(JSON.parse(localStorage.getItem('user')));
        console.log("userd from userAccount"+userd)
    },[])
  const [QuestionTitle, setQuestionTitle] = useState("");
  const [QuestionDescription, setQuestionDescription] = useState("");
  const [Errormsg, setErrormsg] = useState("");
  const [questionObject, setQuestionobject] = useState({});
  function upload() {
    if (QuestionTitle === "" || QuestionDescription === "") {
      setErrormsg("Please Enter the information");
    } else {
      axios
        .post("http://localhost:4200/Questions", {
          QuestionTitle: QuestionTitle,
          QuestionDescription: QuestionDescription,
        })
        .then((Response) => {
          const questionId = Response.data.id;

          // Fetch user information
          axios
            .get(`http://localhost:4200/UserInformation?UserName=${userd?.UserName}`)
            .then((userResponse) => {
              const user = userResponse.data[0];
              const existingQuestions = user?.Questions || [];

              // Update the user's Questions array
              axios
                .patch(`http://localhost:4200/UserInformation/${user.id}`, {
                  Questions: [...existingQuestions, questionId], // Append the new question ID
                })
                .then((Response) => {
                  console.log(Response.data);
                })
                .catch((err) => {
                  console.log(err);
                });
            })
            .catch((err) => {
              console.log(err);
            });

          navigate("/HomePage");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  return (
    <div className="QuestionUpload">
      <div className="QuestionUploadMainDiv">
        <div className="QuestionUploadTitle">Question Title</div>
        <div className="QuestionUploadTitleInput">
          <input
            type="text"
            width={"100%"}
            placeholder="Enter Question Title"
            onChange={(e) => {
              setQuestionTitle(e.target.value);
            }}
          />
        </div>

        <div className="QuestionUploadSummury">Enter Question Summury</div>

        <div className="QuestionUploadSummuryInput">
          <textarea
            rows={10}
            cols={89}
            onChange={(e) => {
              setQuestionDescription(e.target.value);
            }}
          />
        </div>
        <div style={{ color: "red" }}>{Errormsg}</div>

        <div className="QuestionUploadButton">
          <button className="UploadBtn" onClick={upload}>
            Upload
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuestionUpload;
