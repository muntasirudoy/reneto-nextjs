import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

export type CardContextType = {
  variant: "light" | "dark";
  size: "sm" | "md" | "lg";
};

export type CardProps = {
  children: ReactNode;
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  className?: string;
};

export type CardHeaderProps = {
  children: ReactNode;
  className?: string;
};

export type CardTitleProps = {
  children: ReactNode;
  className?: string;
  highlight?: string;
};

export type CardDescriptionProps = {
  children: ReactNode;
  className?: string;
};
export type CardContentProps = {
  children: ReactNode;
  className?: string;
};

export type CardGridProps = {
  children: ReactNode;
  columns?: 2 | 3 | 4;
  className?: string;
};
export type CardGridItemProps = {
  icon?: LucideIcon;
  title: string;
  description?: string;
  className?: string;
};

export type CardActionsProps = {
  children: ReactNode;
  className?: string;
};
