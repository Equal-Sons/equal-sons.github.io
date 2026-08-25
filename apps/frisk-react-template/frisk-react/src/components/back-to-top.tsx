import { useEffect, useState } from "react";

export default function BackToTop() {
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<number>(0);
  const [scrollHeight, setScrollHeight] = useState<number>(100);

  const scrollToTop = () => {
    if (window) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    const scrollTop =
      window.pageYOffset || document.documentElement.scrollTop;
    setScrolled(scrollTop);
    setShowScrollTop(scrollTop >= window.innerHeight);

    setScrollHeight(
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight
    );
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`scroll-top ${showScrollTop ? "show" : ""}`}
      onClick={scrollToTop}
    >
      <svg
        className="progress-circle svg-content"
        width="100%"
        height="100%"
        viewBox="-1 -1 102 102"
      >
        <path
          d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
          style={{
            transition: "stroke-dashoffset 10ms linear 0s",
            strokeDasharray: "307.919, 307.919",
            strokeDashoffset: `${307.919 - (scrolled / scrollHeight) * 307.919
              }`,
          }}
        ></path>
      </svg>
    </div>
  );
}
