import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { animationCreate } from "../utils/utils";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();
  useEffect(() => {
    animationCreate();
  }, [pathname]);

  return <>{children}</>;
};

export default Wrapper;
