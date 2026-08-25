import { useEffect, useRef, useState } from "react";

type SkillProgressProps = {
  progress: number;
}

export default function SkillProgress({ progress }: SkillProgressProps) {
  const targetElement = useRef<HTMLDivElement>(null);

  const [counted, setCounted] = useState<number>(30);

  const startCountup = () => {
    const intervalId = setInterval(() => {
      setCounted((pre) => {
        if (pre === progress) {
          clearInterval(intervalId);
          return pre;
        } else {
          return pre + 1;
        }
      });
    }, 2000 / progress);
  };

  useEffect(() => {
    function handleIntersection(entries: IntersectionObserverEntry[]) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCounted(30);
          startCountup();
        }
      });
    }

   
    const options: IntersectionObserverInit = {
      root: null, 
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (targetElement.current) {
      observer.observe(targetElement.current);
    }

    return () => {
      setCounted(30);
      observer.disconnect();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div
        className="progress-bar"
        ref={targetElement}
        style={{ width: `${counted}%`, transition: "0s" }}
      ></div>
      <div className="progress-value">
        <span className="counter-number">{counted}</span>%
      </div>
    </>
  );
}
