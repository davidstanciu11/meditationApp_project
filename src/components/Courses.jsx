import { courses } from "../mainFiles/data";
import { BsStarFill, BsStarHalf } from "react-icons/bs";

function Courses() {
  return (
    <>
      <section className="section-sm lg:section-lg">
        <div className="container mx-auto">
          <div className="text-center mb-16 lg:mb-32">
            <h2 className="h2 mb-3 lg:mb-[18px]">Popular Courses</h2>
            <p className="max-w-[480px] mx-auto text-sm">
              Embark on a transformative journey of self-discovery by delving
              into a vast catalogue of courses dedicated to the art and practice
              of meditation.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row lg:gap-x-[33px] gap-y-24 mb-7 lg:mb-14">
            {courses.map((item, i) => {
              const { image, title, desc, link} = item;
              return (
                <div
                  className="w-full bg-white hover:shadow-primary max-w-[368px] px-[18px] 
                pb-[26px] lg:px-[28px] lg:pb-[38px] flex flex-col rounded-[15px] mx-auto transition cursor-pointer"
                  key={"itemCourse_" + i}
                >
                  <div className="-mt-[38px] lg:-mt-12 mb-4 lg:mb-6">
                    <img src={image} alt="courseImage" />
                  </div>
                  <div>
                    {" "}
                    <h4 className="text-lg lg:text-xl font-semibold mb-2 lg:mb-4">
                      {title}
                    </h4>
                    <p>{desc}</p>
                  </div>
                  <div className="flex items-center justify-between mt-8 mb-2 lg:mb-0">
                    <div className="flex text-orange gap-x-2">
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarHalf />
                    </div>
                    <a className="font-medium lg:text-sm" href="#">
                      {link}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex justify-center">
            <button className="btn btn-sm btn-orange">Browse all</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Courses;
