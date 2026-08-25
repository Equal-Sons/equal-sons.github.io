import { useEffect } from "react";
import { animationCreate } from "../utils/utils";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
	useEffect(() => {
		animationCreate();
	}, []);

	return <>{children}</>;
};

export default Wrapper;
