import React from "react";
import { useNavigate } from "react-router-dom";
import { useInterviewStore } from "../store/interviewStore";
import './HomePage.css'
const HomePage: React.FC<{}> = () => {
  const navigate = useNavigate();
  const { setMode} = useInterviewStore();
  const onChatClick = () => {
    setMode('chat')
    navigate("/report");
  };

  const onAgentClick = () => {
    setMode('voice')
    navigate("/report");
  };

  return (
    <div className="homepage-container">
      <div className="homepage-content">
        <h1 className="homepage-title">Welcome to AI Interviewer</h1>
        <p className="homepage-subtitle">How would you like to get help?</p>

        <div className="buttons-container">
          <button className="btn btn-chat" onClick={onChatClick}>
            💬 Chat
          </button>

          <button className="btn btn-agent" onClick={onAgentClick}>
            👨‍💼 Talk to Our Agent
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
