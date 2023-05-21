import React from "react";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
}

function Button({ href, children }: ButtonProps) {
  return (
    <a
      href={href}
      className="ml-4 inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      {children}
    </a>
  );
}

export default Button;
