import { useState } from "react";
import { AiOutlineClose, AiFillCheckCircle } from "react-icons/ai";

function MainModal() {
  let [close, setClose] = useState(false);
  function closeMainModal() {
    setClose(true);
  }

  return (
    <>
      {close ? (
        <></>
      ) : (
        <div
          className="fixed top-0 left-0 z-10 w-full min-h-screen bg-black/70"
          onClick={(e) => {
            if (e.target.classList.contains("fixed")) {
              closeMainModal();
            }
          }}>
          <div
            className="relative h-auto mx-auto bg-white rounded-sm w-96 top-80"
            style={{ border: "5px solid #e8e8e8" }}>
            <AiOutlineClose
              className="absolute z-20 bg-white white top-4 right-4"
              onClick={closeMainModal}
              style={{ cursor: "pointer" }}
            />
            <div className="p-4 text-center">
              <h2 className="p-4 text-xl font-bold">참석 의사 전달</h2>
              <p className="leading-8">
                축하의 마음으로 참석해주시는 <br />
                모든 분들을 귀하게 모실 수 있도록 <br />
                참석 의사를 전달 부탁드립니다.
              </p>
              <div className="m-4 border-t"></div>
              <div className="p-4 text-sm text-left">
                <div className="flex items-center">
                  <img
                    className="modal__inner__img"
                    src="https://img.icons8.com/fluency-systems-regular/48/000000/hearts.png"
                    alt=""
                  />
                  <div>신랑 최도현 & 신부 이하나</div>
                </div>
                <div className="flex items-center">
                  <img
                    className="modal__inner__img"
                    src="https://img.icons8.com/fluency-systems-regular/48/000000/calendar--v1.png"
                    alt=""
                  />
                  <div>2023년 5월 20일 토요일 오후 1시 30분</div>
                </div>
                <div className="flex items-center">
                  <img
                    className="modal__inner__img"
                    src="https://img.icons8.com/fluency-systems-regular/48/000000/place-marker--v1.png"
                    alt=""
                  />
                  <div>아펠가모 광화문 B2 로스타뇨홀</div>
                </div>
              </div>
              <div
                className="w-full p-4 my-4 font-medium text-white bg-black rounded-md"
                style={{
                  backgroundColor: "#d0b9b9",
                  fontFamily: "Crimson Pro",
                }}>
                참석 의사 전달하기
              </div>
              <div
                className="flex items-center justify-center"
                style={{ cursor: "pointer" }}>
                <AiFillCheckCircle />
                {/* 오늘 하루 보지 않기 클릭하면 localStorage에 저장하기 */}
                <div style={{ fontFamily: "Crimson Pro" }}>
                  오늘 하루 보지 않기
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MainModal;
