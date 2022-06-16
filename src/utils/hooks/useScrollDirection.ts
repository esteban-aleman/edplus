import { useEffect, useState } from "react";
const useScrollDirection = () => {
  const [scrollUp, setScrollUp] = useState<boolean | null>(null);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;
    const threshold = 10;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? false : true;
      if (
        direction !== scrollUp &&
        (scrollY - lastScrollY > threshold ||
          scrollY - lastScrollY < -threshold)
      ) {
        setScrollUp(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection);
    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    };
  }, [scrollUp]);

  return scrollUp;
};

export default useScrollDirection;
