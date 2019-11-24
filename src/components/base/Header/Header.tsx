import * as React from "react";
import "./Header.scss";
import LOGO from "static/logo.jpg";

export default function BaseHeader() {
  return (
    <header className="BaseHeader">
      <img src={LOGO} className="BaseHeader__logo" alt="logo" />
      <span className="BaseHeader__title">대소고 대나무숲</span>
      <a href="/">뉴스피드</a>
      <a href="/">제보하기</a>
      <a href="/">관리자</a>
    </header>
  );
}
