import React from "react";

const Button = ({
  label,
  onClick,
  variant = "primary",
  size = "md",
  disabled = false,
}) => {
  const baseStyle =
    "font-semibold rounded-sm focus:outline-none transition-colors";
  const sizeStyle =
    size === "sm"
      ? "px-3 py-1 text-sm"
      : size === "lg"
      ? "px-6 py-3 text-lg"
      : "px-4 py-2";
  const variantStyle = {
    primary: "bg-blue-100 text-blue-900 hover:bg-blue-200",
    secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
    danger: "bg-orange-100 text-orange-900 hover:bg-orange-200",
    info: "bg-green-100 text-green-900 hover:bg-green-200",
  };

  return (
    <button
      className={`${baseStyle} ${sizeStyle} ${variantStyle[variant]} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
      onClick={onClick}
      disabled={disabled}>
      {label}
    </button>
  );
};

export default Button;
