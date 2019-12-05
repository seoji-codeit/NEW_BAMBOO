import * as React from "react";
import BaseTemplate from "components/base/Template";
import BaseSidebar from "components/base/Sidebar";
import StoryTemplate from "components/Story/Template";
import AdTemplate from "components/base/Ad/Template";

function HomePage() {
  return (
    <BaseTemplate>
      <>
        <BaseSidebar />
        <StoryTemplate />
        <AdTemplate />
      </>
    </BaseTemplate>
  );
}

export default HomePage;
