import "./QuestionCard.css";
import image from "../../Assets/ProfilePage.png";

function QuestionCard({ summurywidth, width, Title, Summury, AnswerCount, inUserAccount }) {
  return (
    <div className="QuestionCard">
      <div
        className="QuestionCardMain"
        style={{
          width: width,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "20px 30px",
          backgroundColor: "rgb(180, 180, 180)",
          borderRadius: "10px",
        }}
      >
        <div className="QustionCardPostUserDiv">
          <img
            width={"30px"}
            src={image}
            alt="Profile"
            className="QuestionCardProfile"
          />
          <div className="QuestionPostUSer">UserName</div>
        </div>
        <div className="QuestionCardTitle">
          <div>{Title}</div>
        </div>
        <div style={{ width: summurywidth }} className="QuestionSummuryDiv">
          {Summury}
        </div>
        <div className="AnswerCount">{AnswerCount} Answers</div>

        {inUserAccount ?  
        <div></div>
        
        :<div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <button className="QuestionSaveButton">Save</button>
          </div>
          <div>
            <button className="QuestionAnswerButton">Answer</button>
          </div>
        </div>}
      </div>
    </div>
  );
}

export default QuestionCard;
