import React from "react";
import { Button } from "@material-ui/core";
import PropTypes from "prop-types";

const ButtonComponent = ({
  children,
  color,
  variant,
  onclick = () => {},
  className,
  disabled,
  type,
  size,
}) => {
  const handleClick = () => {
    onclick();
  };

  return (
    <Button
      type={type}
      variant={variant}
      color={color}
      className={className}
      onClick={handleClick}
      disabled={disabled}
      size={size}
    >
      {children}
    </Button>
  );
};

ButtonComponent.propTypes = {
  children: PropTypes.string,
  color: PropTypes.string,
  variant: PropTypes.string.isRequired,
  onclick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  size: PropTypes.string,
};

ButtonComponent.defaultProps = {};

export default ButtonComponent;
