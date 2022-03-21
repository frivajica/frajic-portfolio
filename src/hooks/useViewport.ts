import { useState } from "react";

export const useViewport = (maxWidth: number) => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= maxWidth);
	const handleResize = () => {
		setIsSmallScreen(window.innerWidth <= maxWidth)
	};
  
  return { isSmallScreen, handleResize };
};