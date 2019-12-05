import * as React from "react";
import "./Link.scss";
import { LinkItem } from "config/shortcuts";

export default function BaseSidebarLink(props: LinkItem) {
  return (
    <div className="BaseSidebarLink">
      <a href={props.link} target="_blank">
        {props.name}
      </a>
    </div>
  );
}
