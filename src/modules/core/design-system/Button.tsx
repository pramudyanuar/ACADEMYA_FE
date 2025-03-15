import React from "react";

interface ButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  children = "SEARCH JOB",
  type = "button",
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-65 bg-gradient-to-r from-[#0086D3] to-[#112D4E] text-white font-[Montserrat] font-bold p-3 rounded-full hover:from-blue-600 hover:to-blue-800 dark:hover:from-blue-700 dark:hover:to-blue-900 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
