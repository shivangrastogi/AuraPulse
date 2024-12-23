import React from "react";
import { MdEmail, MdLock } from "react-icons/md";  // Material icons

const InputField = ({ type, placeholder, icon }) => {
  const getIcon = (icon) => {
    switch (icon) {
      case "mail": return <MdEmail />;
      case "lock": return <MdLock />;
      default: return null;
    }
  };

  return (
    <div className="input-wrapper">
      <input type={type} placeholder={placeholder} className="input-field" required />
      <i>{getIcon(icon)}</i>
    </div>
  );
};

export default InputField;
