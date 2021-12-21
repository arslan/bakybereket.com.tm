import Image from "next/image";
import MainSectionSlider from "./MainSectionSlider";

const MainSection = () => {
  return (
    <section className="bg-no-repeat bg-center flex flex-wrap" 
    style={{"background-image": "url('mainSection_bg.png')"}}>
      <div>
        <div className="">
          <h1 className="text-5xl font-extrabold">Строительство и обустройство</h1>
        </div>
        <div className="mainCarousel">
        <MainSectionSlider />
        </div>
      </div>

      
      <div>
        <div>
          <h1>Строительство и обустройство</h1>
          <p>Наша компания имеет широкий опыт в надстройке, перестройке, расширении объектов капитального строительства, а также мы специализируемся на замене и восстановлении несущих строительных конструкций.</p>
        </div>
        <div>
          <h1>Строительство и обустройство</h1>
          <p>Наша компания имеет широкий опыт в надстройке, перестройке, расширении объектов капитального строительства, а также мы специализируемся на замене и восстановлении несущих строительных конструкций.</p>
        </div>
        <div>
          <h1>Строительство и обустройство</h1>
          <p>Наша компания имеет широкий опыт в надстройке, перестройке, расширении объектов капитального строительства, а также мы специализируемся на замене и восстановлении несущих строительных конструкций.</p>
        </div>
      </div>
    </section>
  );
}

export default MainSection;  

