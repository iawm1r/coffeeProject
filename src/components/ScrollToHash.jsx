import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHash = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/cart") {
      const element = document.getElementById("cart");
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
        });
      }
    }

    if (location.hash) {
      const element = document.getElementById(location.hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
        });
      }
    }
  }, [location]);
  return null;
};

export default ScrollToHash;
