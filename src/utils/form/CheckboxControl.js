import React from "react";
import PropTypes from "prop-types";
import { Checkbox } from "react-bootstrap";

const CheckboxControl = props => {
    const { classes, onBlur, valueLink, onLabel, onChangeCallback = () => { }, offLabel } = props;
    return (
        <Checkbox
            checked={valueLink.value}
            onChange={event => { valueLink.requestChange(event.target.checked); onChangeCallback(); }}
            className={classes.checkBox}
        >
            <span></span>
            <p className="checkbox-label">{valueLink.value ? onLabel : offLabel || onLabel}</p>
        </Checkbox>
    );
};

CheckboxControl.propTypes = {
    classes: PropTypes.object,
    onBlur: PropTypes.func.isRequired,
    valueLink: PropTypes.object.isRequired,
    onLabel: PropTypes.string.isRequired,
    offLabel: PropTypes.string
};

CheckboxControl.defaultProps = {
    offLabel: "",
    classes: {}
};

export default CheckboxControl;
