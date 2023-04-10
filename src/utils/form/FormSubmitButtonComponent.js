import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import BaseReactComponent from "./BaseReactComponent";

class FormSubmitButtonComponent extends BaseReactComponent {
    constructor(props) {
        super(props);
        this.state = {
            inProgress: false
        };
    }

    componentWillMount() {
        this.props.formContext.registerSubmitButton(this);
    }

    componentWillUnmount() {
        this.props.formContext.unRegisterSubmitButton(this);
    }

    updateInProgress = inProgress => {
        this.setState({ inProgress });
    };

    render() {
        const { progressMessage, fullWidth, children, formError = false, customClass = '', name = "" } = this.props;
        const inProgress = (this.state.inProgress && formError);
        return (
            <Button
                variant="raised"
                bsStyle="primary"
                type="submit"
                disabled={inProgress}
                bsSize={fullWidth}
                className={customClass}
                name={name}
            >
                {inProgress ? progressMessage : children}
            </Button>
        );
    }
}

FormSubmitButtonComponent.propTypes = {
    classes: PropTypes.object,
    formContext: PropTypes.object.isRequired,
    progressMessage: PropTypes.string.isRequired,
    fullWidth: PropTypes.bool
};

FormSubmitButtonComponent.defaultProps = {
    fullWidth: false
};

export default FormSubmitButtonComponent;
