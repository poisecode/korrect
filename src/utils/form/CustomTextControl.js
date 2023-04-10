import React from "react";
import PropTypes from "prop-types";
import { FormControl, InputGroup } from 'react-bootstrap'

const getFormControlData = props => {
  const {
    classes,
    onBlur,
    onChangeCallback,
    valueLink,
    type,
    prefix,
    suffix,
    maxLength,
    placeholder,
    multiline,
    disabled
  } = props;
  return (
    <FormControl
      type={type}
      multiline={multiline}
      maxLength={maxLength}
      placeholder={placeholder}
      disabled={disabled}
      value={valueLink.value}
      onChange={event => {
        valueLink.requestChange(event.target.value)
        onChangeCallback(event.target.value)
      }}
      onBlur={() => onBlur(valueLink.value)}
      className={classes.inputField}
    />
  );
};
const CustomTextControl = props => {
  return (
    (props.prefix || props.suffix) ? (
      <InputGroup>
        {props.prefix && <InputGroup.Addon className={props.classes.prefix}>{props.prefix}</InputGroup.Addon>}
        {getFormControlData(props)}
        {props.suffix && <InputGroup.Addon className={props.classes.suffix}>{props.suffix}</InputGroup.Addon>}
      </InputGroup>
    ) : getFormControlData(props)
  );
};

CustomTextControl.propTypes = {
  classes: PropTypes.object,
  onBlur: PropTypes.func.isRequired,
  onChangeCallback: PropTypes.func.isRequired,
  valueLink: PropTypes.object.isRequired,
  type: PropTypes.oneOf(["text", "password", "hidden"]),
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  maxLength: PropTypes.number,
  placeholder: PropTypes.string,
  multiline: PropTypes.bool,
  disabled: PropTypes.bool
};

CustomTextControl.defaultProps = {
  type: "text",
  prefix: null,
  suffix: null,
  maxLength: 250,
  placeholder: "",
  multiline: false,
  disabled: false,
  classes: {}
};

export default CustomTextControl;