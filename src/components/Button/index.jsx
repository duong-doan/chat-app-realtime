import React from "react";
import { Button } from "@material-ui/core";
import PropTypes from "prop-types";

const ButtonComponent = ({
  children,
  color,
  variant,
  onclick,
  className,
}: ButtonComponent.propTypes) => {
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
};

ButtonComponent.propTypes = {
  children: PropTypes.string,
  color: PropTypes.string,
  variant: PropTypes.string,
  onclick: PropTypes.func,
  className: PropTypes.string,
};

ButtonComponent.defaultProps = {};

export default ButtonComponent;
