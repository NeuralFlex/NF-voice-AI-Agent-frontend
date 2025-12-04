// StartInterview.tsx
import "./StartInterview.css";
import { useState } from "react";

export default function StartInterview() {
  const [isRecording, setIsRecording] = useState(false);
  const [isStarted, setIsStarted] = useState(false);

  const handleStart = () => {
    setIsStarted(true);
    setIsRecording(true);
  };

  const toggleMic = () => setIsRecording(!isRecording);

  const handleEnd = () => {
    setIsRecording(false);
    setIsStarted(false);
  };

  return (
    <div className="interview-container">
      <div className="avatar-wrapper">
        <div className={`avatar ${isRecording ? "recording" : "muted"}`}></div>
      </div>

      <h2 className="status-text">
        {!isStarted && "Ready to Start"}
        {isStarted && isRecording && "AI Interviewer is Listening..."}
        {isStarted && !isRecording && "Microphone Muted"}
      </h2>

      <div className="controls">
        {!isStarted ? (
          <button className="btn start" onClick={handleStart}>Start Interview</button>
        ) : (
          <>
            <button className="btn mic" onClick={toggleMic}>
              {isRecording ? "Mute" : "Unmute"}
            </button>
            <button className="btn end" onClick={handleEnd}>End Interview</button>
          </>
        )}
      </div>
    </div>
  );
}
