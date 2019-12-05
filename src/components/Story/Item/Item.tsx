import * as React from "react";
import "./Item.scss";
import PANDA from "static/panda.jpg";
import Default from "static/default.jpg";
import SimpleImageSlider from "react-simple-image-slider";
import ReactImageGallery from "react-image-gallery";

export interface Story {
  imgs: {
    url: string;
  }[];
  idx: number;
  content: string;
  admin: string;
  writeDate: string;
  type: 0 | 1;
  postUrl: string;
  allowDate: string;
  writerName?: string;
  writerPicture?: string;
}

export default function StoryItem(props: Story) {
  const [error, setError] = React.useState<boolean>(false);
  const isPanda = React.useMemo(() => {
    return props.type === 0;
  }, [props.type]);
  const profile = React.useMemo(() => {
    if (error) return Default;
    else if (props.writerPicture) return props.writerPicture;
    else return PANDA;
  }, [props.writerPicture, error]);
  const imgs = React.useMemo(() => {
    const temp: {
      original: string;
    }[] = [];
    props.imgs.map(({ url }) => {
      temp.push({ original: url });
    });
    return temp;
  }, []);
  return (
    <div className="StoryItem">
      <div className="StoryItem__header">
        <img
          src={profile}
          alt="panda"
          width={32}
          height={32}
          className="StoryItem__header__img"
          onError={() => {
            setError(true);
          }}
        />
        <p className="StoryItem__header__title">
          <span className="StoryItem__header__title Bold">
            {isPanda ? "익명의 판다" : props.writerName}
          </span>
          의&nbsp;
          <span className="StoryItem__header__title Bold">
            {props.idx} 번째&nbsp;
          </span>
          이야기
        </p>
        <span className="StoryItem__header__date">2019.03.02 제보 /</span>
        <span className="StoryItem__header__date">2019.03.02 승인</span>
      </div>
      <div className="StoryItem__content">
        <div className="StoryItem__content__header">
          <h2 className="StoryItem__content__header__title">
            #{props.idx}번째 이야기
          </h2>
          <a
            className="StoryItem__content__header__fbBtn"
            href={props.postUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
        </div>
        <pre className="StoryItem__content__desc">{props.content}</pre>
        {props.imgs.length ? (
          <div className="StoryItem__imgs">
            <ReactImageGallery
              items={imgs}
              showThumbnails={false}
              showPlayButton={false}
              showFullscreenButton={false}
            />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
