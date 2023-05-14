function Main() {
  return (
    <div className="relative w-full mt-8 overflow-hidden">
      <div className="w-full">
        <img
          className="mx-auto drop-shadow-lg"
          src="src/assets/main_img.jpeg"
        />
        <video
          className="absolute left-0 top-0 w-full mix-blend-screen"
          loop
          autoPlay
          muted
          src="https://mcard.fromtoday.co.kr/mcard/assets/flower_00.mp4"
        ></video>
      </div>
      <div className="main-bottom mt-10">
        <div className="text-center main-bottom">
          <span>최도현</span>
          <span className="px-2">|</span>
          <span>이하나</span>
        </div>
        <div className="datetime mt-4">
          <span>2023년 5월 20일 토요일 </span>
          <span>오후 1시 30분</span>
          <br></br>
          <span>아펠가모 광화문 B2 로스타뇨홀</span>
        </div>
      </div>
    </div>
  );
}

export default Main;
