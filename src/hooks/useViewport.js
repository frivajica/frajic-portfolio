import { useState } from "react";

export const useViewport = (maxWidth) => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= maxWidth);
	const handleResize = () => {
		setIsSmallScreen(window.innerWidth <= maxWidth)
	};
  
  return { isSmallScreen, handleResize };
};