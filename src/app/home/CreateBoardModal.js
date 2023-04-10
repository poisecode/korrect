import React from "react";
import { connect } from "react-redux";
import { Button, Modal } from "react-bootstrap";
import {
	BaseReactComponent,
	CustomTextAreaControl,
	CustomTextControl,
	Form,
	FormElement,
	FormSubmitButton,
	FormValidator,
} from "../../utils/form";
import { createBoard } from "../Onboarding/Api";
import { getSelectedAccountId } from "../../utils/ManageToken";


class CreateBoardModal extends BaseReactComponent {
	constructor(props) {
		super(props);
        let boards = props.boards
		this.state = {
            userId:null,
            name: "",
			description: "",
			isboardExist: false
		};
	}

	componentDidMount() {}

    onSubmitCreateBoard = () => {
   
		let isBoard = this.props.boards.map(board => board.name === this.state.name);
		if (isBoard.includes(true)) {
			this.setState({ isboardExist : true});
    } else {
      const accountId = getSelectedAccountId(); //localStorage.getItem("selectedAccount")
      const data = new URLSearchParams();
      data.append("account_id", accountId);
      data.append(
        "boards",
        JSON.stringify([
          {
            name: this.state.name.trim(),
            description: this.state.description,
          },
        ])
      );
      data.append("type", 10);
      createBoard(data, this);
    }
    
     
      }
	onBoardCreated = (board) => {
	
        this.props.onBoardCreated(board)
	}
	
	
	render() {
		return (
      <Modal
        show={this.props.show}
        onHide={this.props.handleClose}
        dialogClassName="custom-modal"
      >
        <Modal.Body>
          <div className="modal-body-wrapper">
            <h4 className="f-s-18">Create new board</h4>
            <Form onValidSubmit={this.onSubmitCreateBoard}>
              <div className="form-wrapper">
                <FormElement
                  valueLink={this.linkState(this, "name")}
                  label="Title"
                  required
                  validations={[
                    {
                      validate: FormValidator.isRequired,
                      message: "Board Title is required",
                    },
                    {
                      validate: FormValidator.isLetterAndSpace,
                      message: "Enter valid Board Title",
                    },
                    {
                      validate: FormValidator.isWithinLength(1, 250),
                      message:
                        "Board Title should be between 1 to 250 characters",
                    },
                  ]}
                  control={{
                    type: CustomTextControl,
                    settings: {
                      multiline: true,
                      maxLength: "250",
                      minLenght: "1",
                      placeholder: "Short, descriptive title",
                      onChangeCallback: () => {
                        // console.log("Callback executed");
                      },
                    },
                  }}
                />
                {this.state.isboardExist && (
                  <p className="error" style={{ margin: "-1rem 0rem 1rem" }}>
                    Board with same title already exist!
                  </p>
                )}
                <FormElement
                  valueLink={this.linkState(this, "description")}
                  label="Description"
                  validations={
                    [
                      // {
                      //   validate: FormValidator.isWithinLength(0, 320),
                      //   message:
                      //     "Description should be between 1 to 320 characters",
                      // },
                    ]
                  }
                  control={{
                    type: CustomTextAreaControl,
                    settings: {
                      multiline: true,
                      maxLength: "360",
                      placeholder: "Any addtitional details...",
                      onChangeCallback: () => {
                        // console.log("Callback executed");
                      },
                    },
                  }}
                />
              </div>
              <div className="button-wrapper">
                <Button
                  onClick={this.props.handleClose}
                  className="btn-secondary"
                >
                  Cancel
                </Button>
                <FormSubmitButton className={`btn-primary`}>
                  Create Board
                </FormSubmitButton>
              </div>
            </Form>
          </div>
        </Modal.Body>
      </Modal>
    );
	}
}

const mapStateToProps = (state) => ({
	CreateBoardModalState: state.CreateBoardModalState,
});
const mapDispatchToProps = {
	// getPosts: fetchPosts
};
CreateBoardModal.propTypes = {
	// getPosts: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateBoardModal);
