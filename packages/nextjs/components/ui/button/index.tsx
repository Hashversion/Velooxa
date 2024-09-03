"use client";

import { useRef } from "react";
import s from "./button.module.scss";
import { useButton } from "react-aria";
import { ButtonProps as AriaButtonProps } from "react-aria-components";

interface ButtonProps extends AriaButtonProps {
  className?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

const Button = (props: ButtonProps) => {
  const ref = useRef(null);
  const { buttonProps } = useButton(props, ref);
  const { children, className, variant = "primary" } = props;

  return (
    <button {...buttonProps} className={`${s.button} ${s[`button--${variant}`]} ${className}`} ref={ref}>
      {children}
    </button>
  );
};

export default Button;
