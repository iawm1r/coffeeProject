
import { useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

const ScrollToHash = () => {
  const location = useLocation();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (location.pathname === "/cart") {
      const element = document.getElementById("cart");

      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      return;
    }

    if (location.hash) {
      const element = document.getElementById(
        location.hash.replace("#", "")
      );

      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      return;
    }

    const search = searchParams.get("search");
    if(search){
      const products = document.querySelectorAll("[id^='product-']")

      const product = Array.from(products).find((element)=>{
       return element.querySelector("h3")?.textContent === search;
      })
      if(product){
        product.scrollIntoView({
          behavior:"smooth",
          block:"center",
        })
      }else{
        return
      }
    }
  }, [location, searchParams]);

  return null;
};

export default ScrollToHash;
