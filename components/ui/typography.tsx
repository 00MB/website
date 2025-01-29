import type React from "react";

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
}

export function H1({ children, className = "" }: TypographyProps) {
  return (
    <h1 className={`text-2xl font-bold tracking-tight ${className}`}>
      {children}
    </h1>
  );
}

export function H2({ children, className = "" }: TypographyProps) {
  return (
    <h2 className={`text-lg font-medium tracking-tight ${className}`}>
      {children}
    </h2>
  );
}

export function Paragraph({ children, className = "" }: TypographyProps) {
  return (
    <p className={`text-sm text-neutral-500 leading-relaxed ${className}`}>
      {children}
    </p>
  );
}

export function Small({ children, className = "" }: TypographyProps) {
  return (
    <p className={`text-xs text-neutral-400 leading-relaxed ${className}`}>
      {children}
    </p>
  );
}
