import { useState } from "react";
import Banner from "../assets/image/banner-part2.png";
import wing1 from "../assets/image/pngwing 1.png";
import wing2 from "../assets/image/pngwing 2.png";

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setMessage("لطفا ایمیل خود را وارد کنید");
      return;
    }
    setIsLoading(true);
    setMessage("");
    try {
      console.log("NewsLetter Email :", email);
      setMessage("ایمیل شما با موفقیت ثبت شد");
      setEmail("");
    } catch (error) {
      setMessage("دوباره تلاش کنید , مشکلی پیش آمده");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="mt-0 sm:mt-0 flex  justify-center items-center relative w-full h-[300px]  sm:h-[500px] text-white"
      style={{ backgroundImage: `url(${Banner})` }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-[#7b4c21]/40"></div>
      <div className="z-10 flex justify-center items-center flex-col text-center px-4 sm:px-10">
        <h3 className="text-xl sm:text-2xl lg:text-4xl text-white my-4">
          ما را دنبال کنید تا به آخرین اخباردسترسی داشته باشید .
        </h3>
        <p className="text-gray-300 mb-5 text-sm sm:text-lg">
          آخرین اخبار , به روزرسانی ها و پیشنهادهای ویژه را از دست ندهید
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex justify-center items-center flex-col sm:flex-row w-full gap-5 sm:gap-0"
        >
          <input
            placeholder="ایمیل خود را وارد کنید "
            type="email"
            onChange={(event) => {
              setEmail(event.target.value);
              setMessage("");
            }}
            value={email}
            className="w-full sm:w-[60%] p-4  rounded-sm text-black"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="mx-2 rounded-sm text-gray-950 bg-cream  px-9 py-4   shadow-sm shadow-cream border-none text-[15px]"
          >
            {isLoading ? "درحال ثبت ..." : "ثبت"}
          </button>
        </form>
        {message && <p className="mt-4 text-xl font-bold">{message}</p>}
      </div>
      <img
        src={wing1}
        alt=""
        className="absolute bottom-[-30px] sm:bottom-[-40px] lg:bottom-[-80px] left-0 w-[120px] sm:w-[250px] lg:w-[350px]"
      />
      <img
        src={wing2}
        alt=""
        className="absolute bottom-[-30px] sm:bottom-[-40px] lg:bottom-[-80px] right-0 w-[120px] sm:w-[250px] lg:w-[350px]"
      />
    </div>
  );
};
export default NewsLetter;
