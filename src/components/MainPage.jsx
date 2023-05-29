import MainModal from "./MainModal";

function Main() {
  return (
    <>
      <MainModal />
      <div className="relative w-full mt-8 overflow-hidden">
        <div className="w-full">
          <img
            className="mx-auto drop-shadow-lg"
            src="src/assets/main_img.jpeg"
          />
          <video
            className="absolute top-0 left-0 w-full mix-blend-screen"
            loop
            autoPlay
            muted
            src="https://mcard.fromtoday.co.kr/mcard/assets/flower_00.mp4"></video>
        </div>
        <div className="mt-10 main-bottom">
          <div className="text-center">
            <span>최도현</span>
            <span className="px-2">|</span>
            <span>이하나</span>
          </div>
          <div className="mt-4 datetime">
            <span>2023년 5월 20일 토요일 </span>
            <span>오후 1시 30분</span>
            <br></br>
            <span>아펠가모 광화문 B2 로스타뇨홀</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
