import { Parallax } from "react-parallax";
import GuyBackground from "../assets/img/hero/guy.png";
import Header from "./Header";

function Hero() {
  return (
    <>
      <section className="min-h-[618px] lg:min-h-[815px] pt-9 lg:bg-circle lg:bg-no-repeat lg:bg-right-top">
        <div className="container mx-auto">
          <Header />
          <div className="flex flex-col items-center lg:flex-row lg:items-start pt-32">
            <div className="flex-1 lg:mt-12">
              <h1 className="h1 mb-3 lg:mb-[22px]">
                Find Your Inner Peace <br /> Anytime, Anywhere.
              </h1>
              <p className="mb-12 lg:mb-6 max-w-[480px] lg:text-sm">
                Meditation is a transformative practice that calms the mind,
                cultivates self-awareness, and promotes inner harmony, leading
                to enhanced focus, reduced stress, and an overall sense of
                well-being.
              </p>
              <div className="mb-12 space-x-4">
                <button className="btn btn-sm lg:btn-lg btn-orange">
                  Get Started
                </button>
                <button className="btn btn-sm lg:btn-lg text-heading bg-transparent border border-stroke-1 px-4 hover:bg-stroke-3 transition">
                  Learn More
                </button>
              </div>
            </div>
            <div className="w-full bg-circle bg bg-cover lg:bg-none lg:w-auto">
              <div className="flex-1 flex justify-center lg:justify-end">
                <div className="w-[234px] h-[234px] lg:w-[504px] lg:h-[744px] lg:mt-0">
                  <Parallax
                    className="w-full h-full p-28 lg:p-16"
                    bgImage={GuyBackground}
                    bgImageAlt="guy meditating"
                    strength={200}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
