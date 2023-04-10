import React from "react";
import PropTypes from "prop-types";
import BaseReactComponent from "./BaseReactComponent";
import FormContext from "./FormContext";

class Form extends BaseReactComponent {
	constructor(props) {
		super(props);
		this.elements = [];
		this.submitButtons = [];
		this.state = {};
		this.formContextValue = {
			registerElement: element => {
				this.elements.push(element);
			},
			unRegisterElement: element => {
				this.elements.splice(this.elements.indexOf(element), 1);
			},
			registerSubmitButton: submitButton => {
				this.submitButtons.push(submitButton);
			},
			unRegisterSubmitButton: submitButton => {
				this.submitButtons.splice(this.submitButtons.indexOf(submitButton));
			}
		};

		this.submitProgressCallback = {
			done: () => {
				this.submitButtons.forEach(submitButton => {
					submitButton.updateInProgress(false);
				});
			}
		};
	}

	onSubmit = event => {
		event.preventDefault();
		if (this.validateAll()) {
			this.submitButtons.forEach(submitButton => {
				submitButton.updateInProgress(true);
			});
			this.props.onValidSubmit(this.submitProgressCallback, event);
		}
		return false;
	};

	validateAll = () => {
		const failedElements = [];
		this.elements.forEach(element => {
			if (!element.validate()) {
				failedElements.push(element);
			}
		});
		return failedElements.length === 0;
	};

	render() {
		return (
			<FormContext.Provider value={this.formContextValue}>
				<form
					className="w-percent-100 flex-full"
					autoComplete="off"
					onSubmit={this.onSubmit}
				>
					{this.props.children}
				</form>
			</FormContext.Provider>
		);
	}
}

Form.propTypes = {
	classes: PropTypes.object,
	onValidSubmit: PropTypes.func.isRequired
};

Form.defaultProps = {};

export default Form;
