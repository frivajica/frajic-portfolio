import React from 'react';
import ReactPinField from "react-pin-field";
import "./index.scss";

interface PinInputProps {
	onChange: Function;
}

export const PinInput:React.FC<PinInputProps> = ({onChange}) => {
  return (
    <div className="container">
      <ReactPinField
				onChange={(e) => onChange(e)}
        className="pin-field"
        type="password"
				length={4}
        validate="0123456789"
      ></ReactPinField>
    </div>
  );
};
