import React from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Auth = () => {
  const navigation = useNavigate();
  const location = useLocation();

  const isLogin = location.pathname === "/login";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isLogin && password !== confirmPassword) {
      alert("رمز عبور و تکرار آن مطابقت ندارد");
      return;
    }
    if (isLogin) {
      console.log("Login:", email, password);
    } else {
      console.log("Register:", name, email, password);
    }
  };

  return (
    <div
      dir="rtl"
      className="min-h-screen flex items-center justify-center bg-[#f8f3e9]  px-5 py-10"
    >
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2 ">
        {/* بخش تصویر سمت راست  */}
        <div className="hidden md:flex relative items-center justify-center bg-[#4b2e24] p-10 text-white">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 text-center">
            <h1 className="text-4xl font-bold text-yellow-400 mb-5">
              کافه گوشه
            </h1>
            <p className="text-lg leading-9">
              طعم واقعی قهوه را تجربه کن <br /> هرفنجان , شروع یک حس خوب{" "}
            </p>
            <div className="mt-8 text-7xl">☕</div>
          </div>
        </div>
        {/* بخش فرم */}
        <div className="p-8 md:p-12">
          <Link
            to="/"
            className="block text-right text-sm  text-gray-500 hover:text-yellow-500"
          >
            ← بازگشت به صفحه اصلی
          </Link>
          <div className="mt-8 text-right">
            <h2 className="text-3xl font-bold text-[#4b2e24]">
              {isLogin ? "خوش برگشتی !" : "به خانواده ما بپیوندید"}
            </h2>
            <p className="text-gray-500 mt-3 text-sm">
              {isLogin
                ? "برای ورود به حساب کاربری اطلاعاتت رو وارد کن."
                : "برای ساخت حساب کاربری اطلاعاتت رو وارد کن."}
            </p>
          </div>
          {/* تغیر بین ورود و ثبت نام  */}
          <div className="flex bg-[#f8f3e9] rounded-xl p-1 mt-8">
            <button
              type="button"
              onClick={() => {
                navigation("/login");
              }}
              className={`w-1/2 py-3 rounded-lg transition-all ${
                isLogin ? "bg-yellow-500 text-white shadow" : "text-gray-600"
              }`}
            >
              ورود
            </button>
            <button
              type="button"
              onClick={() => navigation("/signup")}
              className={`w-1/2 py-3 rounded-lg transition-all ${!isLogin ? "bg-yellow-500 text-white shadow" : "text-gray-600"}`}
            >
              ثبت نام
            </button>
          </div>
          {/* فرم اطلاعات */}
          <form onSubmit={handleSubmit} className="mt-8 space-y-5" >
            {!isLogin && (
              <div>
                <label className="block text-right mb-2 text-sm text-gray-700">
                  نام و نام خانوادگی
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="نام خود را وارد کنید"
                  required
                  className="w-full p-3 rounded-xl border border-gray-200 outline-none focus:border-yellow-500 transition"
                />
              </div>
            )}
            <div>
              <label className="block mb-2 text-sm text-gray-700 text-right">
                ایمیل
              </label>
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="example@gmail.com"
                required
                className="w-full p-3 rounded-xl border border-gray-200 outline-none focus:border-yellow-500 transition"
              />
            </div>
            <div>
              <label className="block text-right mb-2 text-sm text-gray-700">
                رمز عبور
              </label>
              <input
                type="password"
                value={password}
                placeholder="رمز عبور خود را وارد کنید "
                required
                onChange={(event) => setPassword(event.target.value)}
                minLength={6}
                className="w-full p-3 rounded-xl border border-gray-200 outline-none focus:border-yellow-500 transition"
              />
            </div>
            {!isLogin && (
              <div>
                <label className="block text-right mb-2 text-sm text-gray-700">
                  تکرار رمز عبور
                </label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                  placeholder="رمز عبور را مجدداً وارد کنید"
                  required
                  minLength={6}
                  className="w-full p-3 rounded-xl border border-gray-200 outline-none focus:border-yellow-500 transition"
                />
              </div>
            )}
            {isLogin && (
              <div className="text-left">
                <button
                  type="button"
                  className="text-sm text-yellow-600 hover:text-yellow-700"
                >
                  فراموشی رمز عبور؟
                </button>
              </div>
            )}
            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-xl font-bold transition-all"
            >
              {isLogin ? "ورود به حساب کاربری" : "ساخت حساب کاربری"}
            </button>
          </form>
          <p className="text-center text-sm text-gray-500 mt-7">
            {isLogin ? "حساب کابری نداری؟" : "قبلا ثبت نام کردی؟"}
            <button
              type="button"
              onClick={() => navigation(isLogin ? "/signup" : "/login")}
              className="text-yellow-600 font-bold mr-2"
            >
              {isLogin ? "ثبت نام کن" : "وارد شو"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Auth;
