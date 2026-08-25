import { useEffect, type RefObject } from "react";
import { useParallax } from "react-scroll-parallax";
import addGsap from "../../utils/addGsap";
import "react-responsive-modal/styles.css";
import VideoPopup from "../../modals/VideoPopup";
import { useVideoPopup } from "../../hooks/useVideoPopup";

export default function VideoAreaThree() {

  const { isVideoOpen, openVideo, closeVideo } = useVideoPopup();

  const parallax = useParallax({
    speed: -20,
  });

  useEffect(() => {
    addGsap();
  }, []);

  return (
    <>
      <div className="video-area-1 overflow-hidden">
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-lg-12">
              <div className="video-wrap">
                <div
                  className="jarallax background-image"
                  ref={parallax.ref as RefObject<HTMLDivElement>}
                  style={{
                    backgroundImage: "url(/assets/img/normal/video_16-1.jpg)",
                  }}
                ></div>

                <div
                  style={{ cursor: "pointer" }} onClick={openVideo}
                  className="play-btn circle-btn btn gsap-magnetic popup-video background-image"
                >
                  PLAY VIDEO
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <VideoPopup isOpen={isVideoOpen} onClose={closeVideo} videoId="vvNwlRLjLkU" />
    </>
  );
}
