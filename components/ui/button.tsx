import React from "react";

export function Button({ children, className = "", ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`rounded-xl px-4 py-2 text-sm font-semibold shadow hover:shadow-md transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
