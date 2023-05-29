import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import { useRef, useState } from "react";

function Header() {
  let [play, setPlay] = useState(false);
  const audioRef = useRef(null);

  return (
    <header className="text-center w-full">
      <div className="absolute top-4 right-4">
        <audio
          ref={audioRef}
          controls
          src="https://mcard.fromtoday.co.kr/mcard/assets/bgm/piano_00.mp3"
          className="hidden"
        >
          <code>audio</code> element.
        </audio>
        <div className="cursor-pointer text-gray-500">
          {play ? (
            <FaVolumeUp
              onClick={() => {
                audioRef.current.pause();
                setPlay(false);
              }}
            ></FaVolumeUp>
          ) : (
            <FaVolumeMute
              onClick={() => {
                audioRef.current.play();
                setPlay(true);
              }}
            ></FaVolumeMute>
          )}
        </div>
      </div>
      <div className="wedding-datetime title">
        <div className="pt-6 pb-4">
          <span>23</span>
          <span className="before:content-['|'] before:px-2 after:content-['|'] after:p-2 ">
            05
          </span>
          <span>20</span>
        </div>
        <div className="uppercase text-wider wedding-day">Saturday</div>
      </div>
    </header>
  );
}

export default Header;
