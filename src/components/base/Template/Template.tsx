import * as React from "react";
import "./Template.scss";
import BaseHeader from "../Header";
import BaseSidebar from "../Sidebar";
import StoryTemplate from "components/Story/Template";

interface IBaseTemplate {
  children: React.ReactNode;
}

export default function BaseTemplate(props: IBaseTemplate) {
  const { children } = props;
  return (
    <div className="BaseTemplate">
      <BaseHeader />
      <div className="BaseTemplate__body">{children}</div>
    </div>
  );
}
