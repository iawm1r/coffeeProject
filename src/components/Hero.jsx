import React from "react";
import imageHero from "../assets/image/coffee_image1.png";
import { useNavigate } from "react-router-dom";
const Hero = () => {
  const navigation = useNavigate()
  return (
    <div
      style={{ backgroundImage: `url(${imageHero})` }}
      className="w-full h-[55vh] lg:h-[110vh] bg-cover bg-no-repeat relative flex"
    >
      <div className="absolute top-20 left-10 text-right lg:top-60  lg:left-20 max-md:w-[70%] backdrop-blur-[3px] lg:backdrop-blur-0 md:left-28 ">
        <div>
          <p className="text-cream text-6xl my-10">کافه گوشه</p>
        </div>
        <div>
          <p className="text-xl my-10 text-gray-200">
            فراتر از یک کافه , جایی برای استراحت آرامش و تجربه های جدید
            <br />
            به کافه ما خوش آمدید !
          </p>
        </div>
        <div>
          <button
          onClick={()=>navigation("/#menu")}
            className="mx-2 text-gray-950 bg-cream rounded-3xl px-4 py-2 shadow-sm shadow-cream border-none"
          >
            ثبت سفارش
          </button>
        </div>
      </div>
    </div>
  );
};
export default Hero;
