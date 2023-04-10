import React from "react";
import PropTypes from "prop-types";
import { HelpBlock, FormGroup } from "react-bootstrap";
import { ControlLabel } from 'react-bootstrap';
import BaseReactComponent from "./BaseReactComponent";

class FormElementComponent extends BaseReactComponent {
  constructor(props) {
    super(props);
    this.state = {
      failedValidation: null
    };
  }

  componentWillMount() {
    this.props.formContext.registerElement(this);
  }

  componentWillUnmount() {
    this.props.formContext.unRegisterElement(this);
  }

  validate = (stateValue = null) => {
    const { valueLink, validations } = this.props;
    let failedValidation = null;

    if (validations) {
      failedValidation = validations.find(
        validation => {
          return validation.validate(valueLink.value || stateValue) === false
        }
      );
      failedValidation =
        failedValidation !== undefined ? failedValidation : null;
    }

    // THE STATE VALUE IS PASSED FROM COMPONENT CALLBACK METHOD IN CASE OF REACT SELECT.
    if (Array.isArray(stateValue) && stateValue.length > 0) {
      failedValidation = false;
    }

    this.setState({ failedValidation });
    return failedValidation === null;
  };

  render() {
    const {
      classes,
      valueLink,
      label,
      required,
      disabled,
      isMaterial,
      isRupee,
      hint,
      helpText,
      control: { type, settings }
    } = this.props;

    const { failedValidation } = this.state;
    const FormElementControl = type;

    const requiredStyle = {
      color: "red"
    };

    return (
      <div className={isMaterial ? "material" : null}>
        {!isMaterial && label ? (
          required ? (
            <ControlLabel className={classes.label}>
              {label} <span style={requiredStyle}>*</span>
            </ControlLabel>
          ) : (
            <ControlLabel className={classes.label}> {label}</ControlLabel>
          )
        ) : null}
        <FormGroup
          controlId={
            Math.random().toString(36).substring(2, 15) +
            Math.random().toString(36).substring(2, 15)
          }
          validationState={failedValidation ? "error" : ""}
          className={classes.formGroup}
        >
          <div className={`input-wrapper ${valueLink.value ? "active" : ""}`}>
            <FormElementControl
              valueLink={valueLink}
              onBlur={this.validate}
              failedValidation={this.state.failedValidation}
              classes={classes}
              disabled={disabled}
              {...settings}
            />
            {isMaterial && label ? (
              required ? (
                <ControlLabel className={classes.label}>
                  {label}{" "}
                  {isRupee && <span className="rupee-symbol">&#8377;</span>}{" "}
                  <span style={requiredStyle}>*</span>
                </ControlLabel>
              ) : (
                <ControlLabel className={classes.label}>
                 
                    {/* {label}   */}
                    dejkndejdhede
                </ControlLabel>
              )
            ) : null}
          </div>
          {(failedValidation || helpText) && (
            <HelpBlock type="invalid">
              {`${failedValidation ? failedValidation.message : helpText}`}
            </HelpBlock>
          )}
        </FormGroup>
      </div>
    );
  }
}

FormElementComponent.propTypes = {
  classes: PropTypes.object,
  formContext: PropTypes.object.isRequired,
  valueLink: PropTypes.object.isRequired,
  label: PropTypes.string,
  required: PropTypes.bool,
  hint: PropTypes.object,
  helpText: PropTypes.string,
  validations: PropTypes.array,
  control: PropTypes.object.isRequired
};

FormElementComponent.defaultProps = {
  label: null,
  required: false,
  hint: null,
  helpText: "",
  validations: [],
  classes: {}
};

export default FormElementComponent;