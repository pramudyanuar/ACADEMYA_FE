// components/Button.tsx
interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-full bg-blue-500 dark:bg-blue-600 text-white p-2 rounded hover:bg-blue-600 dark:hover:bg-blue-700"
    >
      {children}
    </button>
  );
};

export default Button;
