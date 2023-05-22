import CountUp from "react-countup";
import { facts } from "../mainFiles/data";

function Facts() {
  return (
    <>
      <section>
        <div className="container mx-auto flex flex-col lg:flex-row lg:gap-x-[30px]">
          <div className=" flex-1 flex flex-wrap gap-x-[5%] gap-y-[35px] mb-12">
            {facts.map((item, i) => {
              const { startNumber, endNumber, unit, title, desc } = item;
              return (
                <div className="w-[45%] mt-12" key={"indexCount_" + i}>
                  <h2 className="h2 mb-2 lg:mb-4">
                    <CountUp start={startNumber} end={endNumber} duration={2} enableScrollSpy/>
                    {unit}+
                  </h2>
                  <div className="text-xl font-bold text-heading mb-3">{title}</div>
                  <p className="max-w-[240px] text-xs">{desc}</p>
                </div>
              );
            })}
          </div>
          <div className="flex-1 -order-1 lg:order-none">
            <div className="flex flex-col justify-center h-full lg:pl-[100px]" >
                <h2 className="h2 mb-12 max-w-[315px] mt-12">Discover the Profound Benefits of Our Meditation App.</h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Facts;
