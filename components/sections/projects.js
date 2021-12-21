import Carousel from "./projects/carousel";
import Background from "./projects/background";

function Projects() {
  return (
    <div className="relative">
      <Background />
      <div className="flex h-[36rem]">
        <div className="w-[40rem]">
          <h1 className="font-bold w-1/2 text-2xl my-auto py-12 text-dark-grey">
            ВЫПОЛНЕННЫЕ ПРОЕКТЫ
          </h1>
        </div>

        <div className="flex relative">
          <Carousel />
        </div>
      </div>
    </div>
  );
}

export default Projects;
