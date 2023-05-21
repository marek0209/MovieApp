import React from "react";

export interface ButtonProps {
  href: string;
  children: React.ReactNode;
}

function Button({ href, children }: ButtonProps) {
  return (
    <a
      href={href}
      className="ml-4 inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-white  rounded-lg focus:ring-4 focus:outline-none focus:ring-red-200 bg-red-700 hover:bg-red-500 "
    >
      {children}
    </a>
  );
}

export default Button;
