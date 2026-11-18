
import React from "react";
import FotterImage from "../assets/image/fotter_image.png";
import { Link } from "react-router-dom";

const Fotter = () => {
  return (
    <div
      className="w-full min-h-[100vh] lg:min-h-[70vh]"
      id="connect"
      style={{
        background: `linear-gradient(
          to bottom,
          rgba(88, 55, 35, 0.88) 0%,
          rgba(88, 55, 35, 0.60) 35%,
          rgba(88, 55, 35, 0.22) 70%,
          transparent 100%
        ),url(${FotterImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
      }}
    >
      <div
        dir="ltr"
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-[20%_20%_25%_20%]
          gap-y-12
          lg:gap-y-0
          gap-x-8
          lg:gap-x-4
          justify-items-center
          items-start
          content-center
          min-h-[100vh]
          lg:min-h-[70vh]
          p-8
          lg:p-10
        "
      >
        {/* معرفی کافه */}
        <div className="flex flex-col items-center text-white text-justify gap-5 w-full max-w-[350px]">
          <h2 className="font-bold italic text-2xl md:text-4xl">
            کافه گوشه
          </h2>

          <p className="text-sm md:text-base xl:text-xl leading-8">
            قهوه، فراتر از یک نوشیدنی، شروع لحظه‌هایی ناب و دلنشین است. عطر
            دل‌انگیزش، خستگی روز را از یاد می‌برد و آرامش را به ارمغان می‌آورد.
            هر فنجان، داستانی از طعم، عشق و تازگی را روایت می‌کند. اینجا جایی
            است برای لذت بردن از لحظه‌ها، درست در کنار یک فنجان قهوه.
          </p>
        </div>

        {/* درباره ما */}
        <div className="flex flex-col gap-6 text-white w-full">
          <h2 className="font-bold text-xl md:text-3xl">
            درباره ما
          </h2>

          <div className="flex flex-col gap-4">
            <Link to="/menu" className="text-sm md:text-lg">منو</Link>
            <Link className="text-sm md:text-lg">ویژگی ها</Link>
            <Link className="text-sm md:text-lg">اخبار و بلاگ ها</Link>
            <Link className="text-sm md:text-lg">راهنمایی و پشتیبانی</Link>
          </div>
        </div>

        {/* شرکت */}
        <div className="flex flex-col gap-6 text-white w-full">
          <h2 className="font-bold text-xl md:text-3xl">
            شرکت
          </h2>

          <div className="flex flex-col gap-4">
            <Link className="text-sm md:text-lg">نحوه فعالیت ما</Link>
            <Link className="text-sm md:text-lg">شرایط استفاده از خدمات</Link>
            <Link className="text-sm md:text-lg">قیمت گذاری</Link>
            <Link className="text-sm md:text-lg">سوالات متداول</Link>
          </div>
        </div>

        {/* ارتباط با ما */}
        <div className="flex flex-col gap-6 text-white w-full">
          <h2 className="font-bold text-xl md:text-3xl">
            ارتباط با ما
          </h2>

          <div className="flex flex-col gap-4">
            <Link className="text-sm md:text-lg leading-7 break-words">
              شهرک گلستان بلوار زینعلی کوچه صبا دوم برج های مهستان
            </Link>

            <Link className="text-sm md:text-lg">
              +1 202-918-2132 — شماره تلفن
            </Link>

            <Link className="text-sm md:text-lg break-words">
              beanscene@gmail.com — ایمیل
            </Link>

            <Link className="text-sm md:text-lg break-words">
              www.beanscene.com — وب‌سایت
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Fotter;
