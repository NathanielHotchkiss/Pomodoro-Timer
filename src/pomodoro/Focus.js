import React from "react";
import { minutesToDuration } from "../utils/duration";

export default function Focus({
  isTimerRunning,
  isSessionActive,
  focusDuration,
  setFocusDuration,
}) {
  const decreaseFocus = () => {
    setFocusDuration((lastFocus) => Math.max(5, lastFocus - 5)); // take the previous focusDuration value and subtract 5
  };

  const increaseFocus = () => {
    setFocusDuration((lastFocus) => Math.min(60, lastFocus + 5)); // take the previous focusDuration value and add 5
  };

  return (
    <div className="col">
      <div className="input-group input-group-lg mb-2">
        <span className="input-group-text" data-testid="duration-focus">
          {/* TODO: Update this text to display the current focus session duration */}
          Focus Duration: {minutesToDuration(focusDuration)}
        </span>
        <div className="input-group-append">
          {/* TODO: Implement decreasing focus duration and disable during a focus or break session */}
          <button
            type="button"
            className="btn btn-secondary"
            data-testid="decrease-focus"
            onClick={decreaseFocus}
            disabled={isSessionActive || isTimerRunning ? true : false} // ternary: condition ? do this : do something else. || means == or && === and
          >
            <span className="oi oi-minus" />
          </button>
          {/* TODO: Implement increasing focus duration  and disable during a focus or break session */}
          <button
            type="button"
            className="btn btn-secondary"
            data-testid="increase-focus"
            onClick={increaseFocus}
            disabled={isSessionActive || isTimerRunning ? true : false}
          >
            <span className="oi oi-plus" />
          </button>
        </div>
      </div>
    </div>
  );
}
