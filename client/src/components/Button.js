import React from "react";

const Button = ({ children }) => {
  return (
    <button className="btn btn-primary btn-sm btn-block text-white capitalize">
      {children}
    </button>
  );
};

export default Button;
