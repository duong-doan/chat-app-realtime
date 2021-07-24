import React from "react";
import { Button } from "@material-ui/core";

export default function ButtonComponent({
  children,
  color,
  variant,
  onclick,
  className,
}) {
  const handleClick = () => {
    onclick();
  };

  return (
    <Button
      variant={variant}
      color={color}
      className={className}
      onClick={handleClick}
    >
      {children}
    </Button>
  );
}
