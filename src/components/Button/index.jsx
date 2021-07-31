import React from "react";
import { Button } from "@material-ui/core";
import PropTypes from "prop-types";

const ButtonComponent = ({
  children,
  color,
  variant,
  onclick,
  className,
}) => {
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
  children: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  onclick: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};

ButtonComponent.defaultProps = {};

export default ButtonComponent;
