import banner from "../assets/image/banner-part2.png";
import cup from "../assets/image/cup-banner.png";
import coffee from "../assets/image/coffee_bean_banner.png";
const CoffeeBanner = () => {
  return (
    <div
      className="relative w-full h-[350px] lg:h-[550px] sm:h-[500px] text-white"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-[#7b4c21]/40"></div>
      <div className="absolute left-10 w-[50%] top-[150px]  sm:top-60 sm:w-[50%] lg:w-[40%]  lg:top-1/2 text-right flex flex-col gap-5 ">
        <h4 className="sm:text-3xl text-lg font-bold ">
          صبح را شگفت انگیز شروع کنید{" "}
        </h4>
        <div>
          <p className="sm:text-md text-sm mb-4">
            باهر جرعه طعم زندگی را بچشید قهوه ای با عطربی نظیر و انرژی بخش از
            اولین لحظه تا اخرین قطره روزتان را با خاص کنید قهوه ما همراه همیشگی
            لحظات خوش ما
          </p>
          <button
            onClick={() => {
              document.getElementById("menu").scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="mx-2 text-gray-950 bg-cream rounded-3xl px-4 py-2 shadow-sm shadow-cream border-none"
          >
            ثبت سفارش
          </button>
        </div>
      </div>
      <img
        src={coffee}
        alt="دانه های قهوه"
        className="absolute right-0 bottom-0  sm:block md:w-[50vh] sm:w-[40vh] h-[35vh] sm:h-[55vh] "
      />

      <img
        src={cup}
        alt="لیوان"
        className="absolute lg:right-[150px] sm:top-[180px] md:top-[120px] md:right-[50px] lg:top-[90px]  sm:block w-[150px] top-[100px] right-10 sm:right-[40px]  sm:w-[200px] lg:w-[300px] md:w-[250px]"
      />
    </div>
  );
};
export default CoffeeBanner;
