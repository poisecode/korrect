// import React, { Component } from "react";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
// import { Col, Nav, Button, Row, Tab, Image, Modal } from "react-bootstrap";
// import {
//   BaseReactComponent,
//   CustomTextAreaControl,
//   CustomTextControl,
//   FileUploadControl,
//   Form,
//   FormElement,
//   FormSubmitButton,
//   FormValidator,
//   SelectControl,
// } from "../../utils/form";
// import editIcon from "../../assets/images/icons/edit-icon.svg";
// import deleteIcon from "../../assets/images/icons/delete.svg";
// import checkmark from "../../assets/images/icons/checkmark.svg";
// import { API_BASE_URL, MEDIA_BASE_URL } from "../../utils/Constant";
// import { createPost, updatePost } from "../PublicFeedback/Api";
// import UserAuth from "../auth/UserAuth";

// class AuthModal extends BaseReactComponent {
//   constructor(props) {
//     super(props);
//     let boards = props.boards;
//     this.state = {
//       userId: null,
//       close: false,
//     };
//   }

//   componentDidMount() {}

//   onComplete = (userDetails) => {
//     this.props.onAuthComplete();
//   };
//   handleClose = () => {
//     this.props.closeModel(false);
//   };
//   render() {
//     return (
//       <Modal
//         show={this.props.show}
//         onHide={this.handleClose}
//         dialogClassName="auth-modal"
//       >
//         <Modal.Body>
//           <div className="modal-body-wrapper">
//             <UserAuth
//               isSignUp={true}
//               signUpWithAccount={false}
//               onComplete={this.onComplete}
//               closeModel={this.handleClose}
//             />
//           </div>
//         </Modal.Body>
//       </Modal>
//     );
//   }
// }

// const mapStateToProps = (state) => ({
//   AuthModalState: state.AuthModalState,
// });
// const mapDispatchToProps = {
//   // getPosts: fetchPosts
// };
// AuthModal.propTypes = {
//   // getPosts: PropTypes.func
// };

// export default connect(mapStateToProps, mapDispatchToProps)(AuthModal);
