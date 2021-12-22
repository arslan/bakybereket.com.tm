import Carousel from "./projects/carousel";
import Background from "./projects/background";

function Projects() {
  return (
    <div className="relative">
      <Background />
      <div className="flex flex-row flex-wrap">
        <div className="w-96 mr-16">
          <h1 className="font-bold text-2xl my-auto pt-12 pb-6 mt-12 pr-20 text-dark-grey">
            ВЫПОЛНЕННЫЕ ПРОЕКТЫ
          </h1>
          <p>
            Наша компания имеет широкий опыт в строительстве объектов и
            сооружений, являясь одними из лидеров строительного рынка
            Туркменистана, мы гарантируем качество надежность и современность.
          </p>
        </div>
        <div className="w-96 grow">
          <div className="flex relative">
            <Carousel />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
