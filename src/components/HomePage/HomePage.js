import "./HomePage.css";
import QuestionCard from "../QuestionCard/QuestionCard";
import axios from "axios";
import { useEffect, useState } from "react";

function HomePage() {
  const [Questions, setQuestions] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4200/Questions")
      .then((response) => {
        console.log(response.data);
        setQuestions(response.data); 
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="HomePage">
      <div className="HomeSearchBar">
        <div className="HomeSearchBarTitle">
          <i className="fa fa-search" aria-hidden="true"></i>
          <input
            type="text"
            placeholder="Search for questions"
            className="SearchBar"
          />
        </div>
      </div>

      <div className="HomeQuestions">
        {Questions.length > 0 ? ( 
          Questions.map((Question) => (
            <div className="HomeQuestion" key={Question.id}>
              <QuestionCard
                summurywidth={"750px"}
                width={"800px"}
                Title={Question.QuestionTitle}
                Summury={Question.QuestionDescription} 
                AnswerCount={Question.Answers?.length || 0}
                
                
              />
            </div>
          ))
        ) : (
          <p>Loading questions...</p> // Display a loading message while data is being fetched
        )}
      </div>
    </div>
  );
}

export default HomePage;
