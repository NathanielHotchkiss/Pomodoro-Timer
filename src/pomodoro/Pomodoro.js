import React, { useState } from "react";
import useInterval from "../utils/useInterval";
import Progress from "./Progress";
import Break from "./Break";
import Focus from "./Focus";
import Controls from "./Controls";

export default function Pomodoro() {
  // Timer starts out paused
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [focusDuration, setFocusDuration] = useState(25);
  const [breakDuration, setBreakDuration] = useState(5);
  const [timeRemaining, setTimeRemaining] = useState(25 * 60);
  const [mode, setMode] = useState("focus");
  const [isSessionActive, setIsSessionActive] = useState(false);

  useInterval(
    () => {
      // ToDo: Implement what should happen when the timer is running
      if (timeRemaining === 0) {
        new Audio(`https://bigsoundbank.com/UPLOAD/mp3/2115.mp3`).play();
        const duration = mode === "focus" ? breakDuration : focusDuration; // select the correct time duration
        setTimeRemaining(duration * 60); // set the time remaining to the new duration;
        setMode((prevMode) => (prevMode === "focus" ? "break" : "focus"));
        return; // return will end the callback function and re-render the component
      }
      setTimeRemaining((currentTimeRemaining) => currentTimeRemaining - 1);
    },
    isTimerRunning ? 1000 : null
  );

  return (
    <div className="pomodoro">
      <div className="row">
        <Focus
          isTimerRunning={isTimerRunning}
          isSessionActive={isSessionActive}
          focusDuration={focusDuration}
          setFocusDuration={setFocusDuration}
        />

        <Break
          isTimerRunning={isTimerRunning}
          isSessionActive={isSessionActive}
          breakDuration={breakDuration}
          setBreakDuration={setBreakDuration}
        />
      </div>
      <Controls
        isTimerRunning={isTimerRunning}
        isSessionActive={isSessionActive}
        focusDuration={focusDuration}
        setIsSessionActive={setIsSessionActive}
        setIsTimerRunning={setIsTimerRunning}
        setTimeRemaining={setTimeRemaining}
        setMode={setMode}
      />
      <Progress
        mode={mode}
        isTimerRunning={isTimerRunning}
        timeRemaining={timeRemaining}
        isSessionActive={isSessionActive}
        focusDuration={focusDuration}
        breakDuration={breakDuration}
      />
    </div>
  );
}
