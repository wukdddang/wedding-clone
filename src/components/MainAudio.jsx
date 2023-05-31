import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import { useRef, useState } from "react";

function MainAudio() {
  let [play, setPlay] = useState(false);
  const audioRef = useRef(null);

  const audioOnOff = () => {
    if (!play) {
      audioRef.current.play();
      setPlay(true);
    } else {
      audioRef.current.pause();
      setPlay(false);
    }
  };
  return (
    <section className="absolute top-4 right-4">
      <audio
        ref={audioRef}
        controls
        src="https://mcard.fromtoday.co.kr/mcard/assets/bgm/piano_00.mp3"
        className="hidden">
        <code>audio</code> element.
      </audio>
      <div className="text-gray-500 cursor-pointer">
        {play ? (
          <FaVolumeUp onClick={audioOnOff}></FaVolumeUp>
        ) : (
          <FaVolumeMute onClick={audioOnOff}></FaVolumeMute>
        )}
      </div>
    </section>
  );
}

export default MainAudio;
