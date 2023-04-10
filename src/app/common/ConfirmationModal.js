import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Button, Modal } from "react-bootstrap";
import {
	BaseReactComponent,
} from "../../utils/form";
import { CheckCircle } from "react-feather";


class ConfirmationModal extends BaseReactComponent {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	componentDidMount() {}

	render() {
		const {title, description,positiveText, negativeText,show, modalType} = this.props
 		
		return (
			<Modal
			show={show}
			onHide={this.props.handleClose}
			dialogClassName="confirmation-modal">
			<Modal.Body>
				<div className={`modal-body-wrapper`}>
					{/* <div className="modal-icon-container">
						<CheckCircle size={20} color={"black"}/>
					</div> */}
					<p className="modal-title">{title}</p>
					<p className="modal-description">{description}</p>
                    <div className={`button-wrapper`}>
						<Button onClick={this.props.handleClose} className="btn-secondary">{negativeText}</Button>
						<Button onClick={this.props.onSubmit} className={`btn-primary ${modalType}`}>{positiveText}</Button>
					</div>
				</div>
			</Modal.Body>
			</Modal>
		);
	}
}

const mapStateToProps = (state) => ({
	ConfirmationModalState: state.ConfirmationModalState,
});
const mapDispatchToProps = {
	// getPosts: fetchPosts
};
ConfirmationModal.propTypes = {
	// getPosts: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmationModal);
