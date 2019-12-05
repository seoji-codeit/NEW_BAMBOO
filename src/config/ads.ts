export interface ad {
  title: string; // 필수 제목
  content: string; // 필수 내용
  textColor?: string; // 글씨 색깔 기본 흰색
  backgroundColor?: string; // 배경 색깔 기본 밤색
  borderColor?: string; // 테두리 색깔 기본 X
  linkTo?: string; // 클릭시 이동할 링크
}

export const ads: ad[] = [
  {
    title: "코딩 강의는 코드잇",
    content: `코드잇에서 OOP, 자료구조 수업이 오픈되었습니다,\n개발자에게 꼭 필요한 두 가지 과목이니 배우고 싶으면 코드잇에서 배우세요!\n관리자 서지녁에게 연락하면 40% 할인 쿠폰 받으실 수 있습니다.`,
    backgroundColor: "#7e5feb",
    textColor: "#ffffff",
    linkTo: "https://codeit.kr"
  }
  // 광고를 추가하세요!
];
