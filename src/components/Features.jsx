import { useState } from "react";
import ModalVideo from "react-modal-video";
import "../mainFiles/video.scss";
import { BsPlayCircleFill } from "react-icons/bs";
function Features() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <section className="bg-section min-h-[428px] pt-8 pb-[38px] lg:pb-[100px] mt-[120px] lg:mt-[150px]" id="Features">
        <div className="container mx-auto">
          <div
            className="bg-video h-[310px] bg-cover bg-center bg-no-repeat 
          lg:h-[622px] w-full flex justify-center items-center rounded-md -mt-[150px]  mb-[28px] lg:mb-10" data-aos="fade-up" data-os-delay="500"
          >
            <div
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              className="text-6xl lg:text-[80px] text-orange cursor-pointer hover:scale-110 transition"
            >
              <BsPlayCircleFill />
            </div>
          </div>
          <h2 className="h2 mb-3 lg:mb-0">
            How to start your <br /> Yoga Journey{" "}
          </h2>
          <div>
            <p className="max-w[360px] mb-[18px] lg:mb-[15px] lg:mt-4 text-lg">
              Explore a new way to exercise and learn more about yourself.
            </p>
            <button className="btn btn-sm btn-orange ">Get Started</button>
          </div>
        </div>
        <ModalVideo channel="youtube" autoplay isOpen={isOpen} videoId="klmBssEYkdU" onClose={() => setIsOpen(false)} />
      </section>
    </>
  );
}

export default Features;
