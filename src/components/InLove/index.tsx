import {ReactComponent as Heart} from "src/assets/images/Heart.svg";
import { useState } from "react";
import NicteHá from "src/assets/images/Nicte-Há.jpg";
import { PinInput } from "src/components/PinInput";
import "./index.scss";

export const InLove = () => {
  const [isNicte, setIsNicte] = useState(false);
  const handlePin = (e: any) => {
		if (e === "1824") return setIsNicte(true);
  };

  return (
    <div className="container">
      <div className="teQuiero">
        <div className="firstHeart"><Heart /></div>
        <div className="secondHeart"><Heart /></div>
        <div className="thirdHeart"><Heart /></div>
        <div className="fourthHeart">
          <Heart />
          <div className="name">Nicte</div>
        </div>
        <span>Te quiero</span>
      </div>
    </div>
  );
};
