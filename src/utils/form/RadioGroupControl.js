import React from "react";
import PropTypes from "prop-types";
import { FormGroup, Radio } from "react-bootstrap";

const RadioGroupControl = props => {
    const { classes, onBlur, valueLink, columns, options, displayInline = true, disabled = false } = props;
    return (
        <FormGroup>
            <div className="mr-t-sm">
                {options.map(option => (
                    <Radio
                        inline={displayInline}
                        key={option.key}
                        value={option.key}
                        checked={valueLink.value.indexOf(option.key) > -1}
                        onChange={e => valueLink.requestChange(e.target.value)}
                        className={classes.radioButton}
                        disabled={disabled}
                    >
                        <span>{option.label}</span>
                    </Radio>
                ))}

            </div>
        </FormGroup>
    );
};

RadioGroupControl.propTypes = {
    // classes: PropTypes.object.isRequired,
    onBlur: PropTypes.func.isRequired,
    valueLink: PropTypes.object.isRequired,
    columns: PropTypes.number,
    options: PropTypes.array.isRequired
};

RadioGroupControl.defaultProps = {
    classes: {},
    columns: 1
};

export default RadioGroupControl;
/**
 <Grid item sm={12 / columns} key={option.key}>
 <Radio
 value={option.key}
 checked={valueLink.value.indexOf(option.key) > -1}
 onChange={e => valueLink.requestChange(e.target.value)}
 >
 {option.label}
 </Radio>
 </Grid>
 **/
