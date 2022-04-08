import React from "react";
import "../../assets/sass/StepProgress.scss";

function MyStepProgressVertical() {
  return (
    <>
      <ul className="my-step-progress">
        <li className="my-step-progress-item step">
          <label className="my-step-progress-label">
            Post a contest
            <label className="my-step-progress-label-time">2 hours ago</label>
          </label>
          <label className="my-step-progress-sub-label">FPT</label>
        </li>
        <li className="my-step-progress-item step">
          <label className="my-step-progress-label">
            Award an entry
            <label className="my-step-progress-label-time">Yesterday</label>
          </label>
          <label className="my-step-progress-sub-label">FPT</label>
        </li>
        <li className="my-step-progress-item step">
          <label className="my-step-progress-label">
            Post a contest
            <label className="my-step-progress-label-time">Last week</label>
          </label>
          <label className="my-step-progress-sub-label">FPT</label>
        </li>
        <li className="my-step-progress-item step">
          <label className="my-step-progress-label">
            Handover
            <label className="my-step-progress-label-time">Last month</label>
          </label>
          <label className="my-step-progress-sub-label">FPT</label>
        </li>
        <li className="my-step-progress-item step">
          <label className="my-step-progress-label">
            Provide feedback
            <label className="my-step-progress-label-time">Last year</label>
          </label>
          <label className="my-step-progress-sub-label">FPT</label>
        </li>
      </ul>
    </>
  );
}

export default MyStepProgressVertical;
