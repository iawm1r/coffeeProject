import React from "react";
import coffeeImage from "../assets/image/coffee_image.png";
import coffeeBlasd from "../assets/image/coffee_blast.png";

const Banner = () => {
  return (
    <div className="relative flex items-center  flex-col mt-[10vh] xl:mt-[0px] md:flex-row md:justify-center " id="home">
      <div className="flex justify-center md:w-1/2">
        <img
          src={coffeeImage}
          alt="کافه گوشه"
          className="w-[40%] h-[auto] object-contain md:w-[340px] lg:w-[400px] xl:w-[500px]"
        />
      </div>

      <div className="text-center  ml-5  md:text-justify p-4  md:w-[60%]">
        <h2 className="text-brown text-2xl md:text-2xl lg:text-3xl xl:text-4xl mb-4">
          به دنبال بهترین قهوه باشید
        </h2>
        <p className="text-sm md:text-base lg:text-lg mb-6 text-gray-600">
          قهوه چیزی فراتر از یک نوشیدنی ساده است؛ بهانه‌ای برای فاصله گرفتن از
          شلوغی‌های روزمره و لذت بردن از لحظه‌های آرام زندگی. عطر دل‌انگیز
          دانه‌های تازه‌آسیاب‌شده و طعم بی‌نظیر هر فنجان، می‌تواند حال‌وهوای یک
          روز معمولی را تغییر دهد. در کافه گوشه، تلاش می‌کنیم با ترکیبی از
          کیفیت، طعم و آرامش، تجربه‌ای متفاوت برای شما بسازیم. جایی برای نوشیدن
          یک فنجان قهوه، گفت‌وگویی صمیمی و ثبت خاطراتی شیرین. **کافه گوشه؛ طعم
          آرامش در هر فنجان.** ☕
        </p>
        <button className="text-gray-950 bg-cream shadow-sm shadow-cream border-none rounded-3xl px-4 py-2 ">
         بیشتر بدانید
        </button>
      </div>
      <div className="absolute left-0 bottom-[-70px] md:bottom-[-100px] xl:bottom-[0px] lg:bottom-[-70px] ">
        <img src={coffeeBlasd} alt="" className="md:w-[40vh] w-[30vh]" />
      </div>
    </div>
  );
};
export default Banner;
