import * as React from "react";
import "./Item.scss";
import { ad } from "config/ads";

function AdItem(props: ad) {
  return (
    <div
      className="AdItem"
      style={{
        color: props.textColor,
        backgroundColor: props.backgroundColor,
        border: `1px solid ${props.borderColor}`
      }}
    >
      <h1>{props.title}</h1>
      <span>{props.content}</span>
    </div>
  );
}

export default AdItem;
