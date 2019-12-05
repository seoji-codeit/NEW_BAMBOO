import * as React from "react";
import "./Loading.scss";
import Loading from "static/Loading.svg";

function StoryLoading() {
  return (
    <div className="StoryLoading">
      <img src={Loading} alt="Loading" className="StoryLoading__img" />
      <p className="StoryLoading__content">Loading stories...</p>
    </div>
  );
}

export default StoryLoading;
