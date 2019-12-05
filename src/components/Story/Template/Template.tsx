import * as React from "react";
import "./Template.scss";
import { inject, observer } from "mobx-react";
import StoryItem from "../Item";
import StoryStore from "stores/Story";
import StoryLoading from "../Loading";

interface IStoryTemplate {
  storyStore?: StoryStore;
}

function StoryTemplate(props: IStoryTemplate) {
  const { storyStore } = props;
  if (!storyStore) return <></>;
  const { isInit, storyList, initStory, isLoading, moreStory } = storyStore;
  React.useEffect(() => {
    !isInit && initStory();
  }, []);
  return (
    <div className="StoryTemplate">
      {!isInit && <StoryLoading />}
      {isInit && storyList.map(e => <StoryItem {...e} key={e.idx} />)}
      {isInit && (
        <button className="StoryTemplate__moreBtn" onClick={moreStory}>
          {isLoading ? "Loading More....." : "More"}
        </button>
      )}
    </div>
  );
}

export default inject("storyStore")(observer(StoryTemplate));
