import React from "react";

interface ButtonSearchJobProps {
  onClick?: () => void;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  className?: string;
}

export const ButtonSearchJob: React.FC<ButtonSearchJobProps> = ({
  onClick,
  children = "SEARCH JOB", // Default text
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

export default ButtonSearchJob;

//contoh cara pakainya
// <ButtonSearchJob>SEARCH JOB</ButtonSearchJob>
