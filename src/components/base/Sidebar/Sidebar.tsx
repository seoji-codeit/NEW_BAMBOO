import * as React from "react";
import "./Sidebar.scss";
import { shortcuts } from "config/shortcuts";
import BaseSidebarLink from "./Link";
import { team } from "config/team";

export default function BaseSidebar() {
  return (
    <div className="BaseSidebar">
      <div className="BaseSidebar__repo">
        <div className="BaseSidebar__repo__header">
          <h2>ShortCuts</h2>
          <button>추가하기</button>
        </div>
        <a className="BaseSidebar__repo__github">View code in github...</a>
        {shortcuts.map(e => (
          <BaseSidebarLink {...e} key={e.link} />
        ))}
      </div>
      <div className="BaseSidebar__dev">
        <h2 className="BaseSidebar__dev__title">bamboo team</h2>
        {team.map(e => (
          <BaseSidebarLink {...e} key={e.link} />
        ))}
      </div>
    </div>
  );
}
