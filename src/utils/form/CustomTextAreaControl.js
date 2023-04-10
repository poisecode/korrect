import React from "react";
import PropTypes from "prop-types";
import { FormControl, InputGroup } from "react-bootstrap";

const getFormControl = props => {
  const {
    classes,
    onBlur,
    valueLink,
    type,
    prefix,
    suffix,
    maxLength,
    placeholder,
    multiline,
    disabled,
    rows
  } = props;
  return (
    <FormControl
      componentClass={type}
      rows={rows}
      // multiline={multiline}
      maxLength={maxLength}
      placeholder={placeholder}
      disabled={disabled}
      value={valueLink.value}
      onChange={event => valueLink.requestChange(event.target.value)}
      onBlur={() => onBlur(valueLink.value)}
    />
  );
};
const TextAreaControl = props => (
  props.prefix || props.suffix ? (
    <InputGroup>
      <InputGroup.Addon>{props.prefix}</InputGroup.Addon>
      {getFormControl(props)}
      <InputGroup.Addon>{props.suffix}</InputGroup.Addon>
    </InputGroup>
  ) : (
    getFormControl(props)
  )
);

TextAreaControl.propTypes = {
  //classes: PropTypes.object.isRequired,
  onBlur: PropTypes.func.isRequired,
  valueLink: PropTypes.object.isRequired,
  type: PropTypes.oneOf(["textarea", "text", "password"]),
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  maxLength: PropTypes.number,
  placeholder: PropTypes.string,
  multiline: PropTypes.bool,
  disabled: PropTypes.bool,
  rows: PropTypes.number
};

TextAreaControl.defaultProps = {
  type: "textarea",
  rows: 4,
  prefix: null,
  suffix: null,
  maxLength: 250,
  placeholder: "",
  multiline: true,
  disabled: false
};

export default TextAreaControl;
