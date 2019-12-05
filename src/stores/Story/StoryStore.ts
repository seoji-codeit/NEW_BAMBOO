import { observable, flow, action } from "mobx";
import axios from "axios";
import { Story } from "components/Story/Item/Item";
import { SERVER } from "config/config";

class StoryStore {
  @observable storyList: Array<Story> = [];
  maxCount = 0;
  @observable count: number = 0;
  @observable isInit: boolean = false;
  @observable isLoading: boolean = false;
  @observable isError: boolean = false;

  getCount = flow(function*(this: StoryStore) {
    const response = yield axios.get(`${SERVER}/user/count`);
    if (response.status !== 200) {
      this.isError = true;
      return;
    }
    this.maxCount = response.data.count;
  }).bind(this);

  @action
  initStory = async () => {
    await this.getCount();
    await this.fetchStory();
    await this.fetchStory();
    await this.fetchStory();
    setTimeout(() => {
      this.isInit = true;
    }, 700);
  };

  fetchStory = flow(function*(this: StoryStore) {
    this.isLoading = true;
    const response = yield axios.get(`${SERVER}/user/post/${this.count}`);
    if (response.status !== 200) {
      this.isError = true;
      return;
    }
    this.storyList = this.storyList.concat(response.data.post);
    this.count += 5;
    this.isLoading = false;
  }).bind(this);

  moreStory = async () => {
    await this.fetchStory();
    await this.fetchStory();
    await this.fetchStory();
  };
}

export default StoryStore;
