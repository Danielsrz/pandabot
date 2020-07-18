import React from "react";
import "./Select.css";
import userAvatar from "../../../assets/images/user.png";

const Select = ({ options, handleSelectedOptions }) => {
  return (
      <div className="selector-container">
        <div className="selector-content">
          {options.map((op) => (
            <div
              onClick={(e) => handleSelectedOptions(op.id)}
              key={op.id}
              className="selector-options"
            >
              <label>{op.text}</label>
            </div>
          ))}
        </div>
        <img src={userAvatar} />
      </div>
  );
};

export default Select;
