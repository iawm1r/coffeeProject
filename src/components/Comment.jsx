import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Customers from "../data/customers";
import Image1 from "../assets/image/comment1.png";
import Image2 from "../assets/image/comment2.png";

const Comment = () => {
  const [swiper, setSwiper] = useState(null);

  // برای افزودن نظرات کاستومرس میشه نظرات فعلی ست کاستومر میشه برای تغیرات نظرات جدید
  const [customers, setCustomers] = useState(Customers);

  // برای افزودن اسم و توضیحات یا همون نظرات کابر که review نام دارد
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  // برای بازو بسته کردن فرم که حالت دیفالت ان روی فالز قرار میگیرد یعنی بسته بودن درحالت اولیه
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !review.trim()) {
      return;
    }

    const newCustomers = {
      name: name,
      review: review,
    };

    setCustomers((prevCustomers) => [...prevCustomers, newCustomers]);

    setName("");
    setReview("");
    setShowForm(false);
  };
  return (
    <div className="relative text-center my-0 h-[100vh] ">
      <img
        src={Image1}
        className="absolute z-10 right-0 top-[20px] w-[20vh] md:w-[40vh] lg:w-[50vh] lg:top-[-100px] "
      />

      <div className="text-center my-8">
        <h4 className="text-brown text-4xl font-bold mb-4">
          نظرات مشتریان در مورد ما
        </h4>
        <p className="text-gray-600 text-sm">
          برخی از نظرات مشتریان که از ما رضایت داشته اند
        </p>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-[#F9C06A] text-brown px-6 py-3 rounded-lg mt-6 hover:bg-[#eeb65f] transition"
        >
          {showForm === false ? "ثبت نظر" : "بستن فرم"}
        </button>
      </div>
      {/* فرم ثبت نظر */}
      {showForm && (
        <form
          onSubmit={handleSubmit} 
          className="relative z-0 w-[60%] md:w-[60%] mx-auto my-8 p-6 bg-[#FFF9F1] border border-amber-300 rounded-xl shadow-md"
        >
          <h3 className="text-xl font-bold text-brown mb-5">
            نظر خود را ثبت کنید
          </h3>
          <input
            type="text"
            placeholder="نام شما"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="w-full border border-gray-300 p-3 rounded-lg mb-4 outline-none focus:border-amber-400"
          />
          <textarea
            placeholder="نظر شما"
            value={review}
            rows="4"
            onChange={(event) => setReview(event.target.value)}
            className="w-full border border-gray-300 p-3 rounded-lg mb-4 outline-none focus:border-amber-400 resize-none"
          />
          <button
            type="submit"
            className="bg-[#F9C06A] text-brown px-8 py-3 rounded-lg hover:bg-[#eeb65f] transition"
          >
            ارسال نظر
          </button>
        </form>
      )}
      <div className="relative w-[60%] z-0 h-[530px] mx-auto border shadow-sm sm:p-6 bg-[#FFF9F1] border-amber-400">
        <button
          onClick={() => swiper?.slideNext()}
          className="absolute top-1/2 -left-6 -translate-y-1/2 z-20
        w-[50px] h-[50px] bg-[#F9C06A] rounded-xl
        flex items-center justify-center text-3xl"
        >
          ›
        </button>

        {/* فلش راست */}
        <button
          onClick={() => swiper?.slidePrev()}
          className="absolute top-1/2 -right-6 -translate-y-1/2 z-20
        w-[50px] h-[50px] bg-[#F9C06A] rounded-xl
        flex items-center justify-center text-3xl"
        >
          ‹
        </button>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          onSwiper={setSwiper}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          slidesPerView={1}
          className="comment-swiper"
        >
          {customers.map((customer, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center text-center justify-center h-[450px] gap-10 ">
                <p className="text-gray-700 italic text-sm lg:text-lg w-[70%]">
                  {customer.review}
                </p>
                <p className="text-brown font-bold text-2xl md:text-3xl mt-4">
                  {customer.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <img
        src={Image2}
        alt=""
        className="absolute left-0  md:top-[500px] md:w-[40vh] lg:w-[50vh] top-[550px] w-[20vh]"
      />
    </div>
  );
};
export default Comment;
