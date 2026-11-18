import coffeBlast from "../assets/image/coffee_blast 2.png";
import coffeBeans from "../assets/image/coffee-beans.png";
import badge from "../assets/image/badge.png";
import coffeCup from "../assets/image/coffee-cup png.png";
import bestPrice from "../assets/image/best-price png.png";
import { useNavigate } from "react-router-dom";
const WhyUs = () => {
  const navigation = useNavigate()
  return (
    <div className="relative" id="whyUs">
      <div className="absolute right-0 top-[-100px]">
        <img src={coffeBlast} alt="لوگو" className="w-[30vh] md:w-[30vh] lg:w-[40vh]" />
      </div>
      <div className="my-20 p-5 max-w-6xl mx-auto">
        <div>
          <h2 className="text-brown text-4xl font-bold mb-2 ">
            چرا کافه گوشه ؟
          </h2>
          <p className="text-sm text-gray-600">
            با کافه گوشه میتونی هرجا که هستی روزتو باهاش شروع کنی !
          </p>
        </div>

        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-10 m-10">
          <div className=" bg-light flex flex-col items-center justify-center rounded-sm border border-amber-500 px-2 py-10 gap-5">
            <img src={bestPrice} alt="" />
            <div>
              <h4 className="text-2xl text-brown font-bold">قیمت مناسب</h4>
              <p className="text-sm text-gray-700 mt-3">
                بهترین قهوه با کمترین قیت
              </p>
            </div>
          </div>
          <div className=" bg-light flex flex-col items-center justify-center rounded-sm border border-amber-500 px-2 py-10 gap-5">
            <img src={coffeCup} alt="" />
            <div>
              <h4 className="text-2xl text-brown font-bold">فوق العاده</h4>
              <p className="text-sm text-gray-700 mt-3">
                قهوه ای شگفت انگیز تجربه کنید
              </p>
            </div>
          </div>
          <div className=" bg-light flex flex-col items-center justify-center rounded-sm border border-amber-500 px-2 py-10 gap-5">
            <img src={badge} alt="" />
            <div>
              <h4 className="text-2xl text-brown font-bold">کیفیت عالی</h4>
              <p className="text-sm text-gray-700 mt-3">
                ما بهترین کیفیت را فراهم میکنیم!
              </p>
            </div>
          </div>
          <div className=" bg-[#FFEED8] flex flex-col items-center justify-center rounded-sm px-2 py-10 gap-5">
            <img src={coffeBeans} alt="" />
            <div>
              <h4 className="text-2xl text-brown font-bold">
                قهوه های سلطنتی{" "}
              </h4>
              <p className="text-sm text-gray-700 mt-3">بادانه های عالی</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 justify-center items-center">
          <div className="flex flex-col gap-1">
            <p className="text-lg text-gray-600">بهترین ایده ها با بهترین قهوه ها شروع میشوند</p>
            <h2 className="text-brown font-bold text-3xl">از امروز شروع کن.</h2>
          </div>
          <button onClick={()=>navigation("/signup")} className=" mx-2 text-gray-950 bg-cream rounded-3xl px-4 py-2 shadow-sm shadow-cream border-none ">به ما بپیوندید</button>
        </div>
      </div>
    </div>
  );
};
export default WhyUs;
