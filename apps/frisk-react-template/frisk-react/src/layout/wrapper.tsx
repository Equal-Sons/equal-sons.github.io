import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { animationCreate } from "../utils/utils";
import { ToastContainer } from "react-toastify";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  
  const { pathname } = useLocation();
  useEffect(() => {
    animationCreate();
  }, [pathname]);

 return (
    <>
      {children}
      <ToastContainer position="top-center" />
    </>
  );
};

export default Wrapper;
