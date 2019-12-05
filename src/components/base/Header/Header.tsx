import * as React from "react";
import "./Header.scss";
import LOGO from "static/logo.jpg";
import CODEIT from "static/codeit.svg";
import useToggle from "hooks/useToggle";

export default function BaseHeader() {
  const [dropdown, setDropdown] = useToggle(false);
  return (
    <>
      <header className="BaseHeader">
        <button className="BaseHeader__sidebarBtn" onClick={setDropdown}>
          <span />
          <span />
          <span />
        </button>
        <img src={LOGO} className="BaseHeader__logo" alt="logo" />
        <span className="BaseHeader__title">대소고 대나무숲</span>
        <a href="/" className="BaseHeader__link">
          뉴스피드
        </a>
        <a href="/" className="BaseHeader__link">
          제보하기
        </a>
        <a href="/" className="BaseHeader__link">
          관리자
        </a>
        <a
          className="BaseHeader__codeit"
          href="https://codeit.kr"
          target="_blank"
        >
          <img src={CODEIT} width={32} height={32} />
        </a>
      </header>
      {dropdown && (
        <div className="BaseHeader__dropdown">
          <a href="/">뉴스피드</a>
          <a href="/">제보하기</a>
          <a href="/">관리자</a>
        </div>
      )}
    </>
  );
}
