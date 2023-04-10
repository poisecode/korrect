import React from "react";
import { Component } from "react";
import { Image } from "react-bootstrap";
import { connect } from "react-redux";
import menuDots from "../../assets/images/icons/vertical-dots.svg";
import selectedTick from "../../assets/images/icons/tick.svg";
import exportIcon from "../../assets/images/icons/export.svg";
import { Link } from "react-router-dom";
import { MoreVertical } from "react-feather";
import {textEllipse} from "../../utils/ReusableFunctions"

export class BoardCard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showMenu: false,
		};
		this.dropDownRef = React.createRef()
		this.handleClickOutside = this.handleClickOutside.bind(this);
	}

	componentDidMount() {
		document.addEventListener("mousedown", this.handleClickOutside);
	  }
	
	componentWillUnmount() {
		document.removeEventListener("mousedown", this.handleClickOutside);
	}

	onBoardMenuClicked = (e) => {
		console.log(e.target, this.dropDownRef.current)
		let showMenu = this.state.showMenu;
		this.setState({showMenu:!showMenu})
		e.stopPropagation();
	}
	onEditBoard = (e) => {
		e.stopPropagation();
		e.preventDefault();
		console.log(e, "edit")
		this.setState({showMenu:false})
		this.props.onMenuClicked(this.props.id, "edit")
	}
	onDeleteBoard = (e) => {
		e.stopPropagation();
		e.preventDefault();
		console.log(e, "delete")
		this.setState({showMenu:false})
		this.props.onMenuClicked(this.props.id, "delete")
	}
	handleClickOutside = (e) =>{
		if (this.dropDownRef &&this.dropDownRef.current&& !this.dropDownRef.current.contains(e.target)) {
			if(this.state.showMenu){
				this.setState({showMenu:false});
				e.stopPropagation();
			}
		}
	}
	onBoardClicked = (e) => {
		console.log(e, "board clicked")
		this.props.onSelect(this.props.id)
	}
 	render() {
		  const { id, title, subtitle, type, selected, onSelect, board } = this.props;
		
		return (
      <div
        onClick={this.onBoardClicked}
        className={`card ${type} ${selected ? "selected-card" : ""}`}
      >
        <div className={`board-content ${type} `}>
          <div className="board-title">
            <h4 style={textEllipse(1, type === "all-posts" ? 100 : 95)}>
              {title}
            </h4>
            {type === "all-posts" && <Image src={exportIcon} />}
          </div>

          <h5 style={textEllipse(2, type === "all-posts" ? 100 : 95)}>
            {subtitle}
          </h5>
          {type === "board" || type === "all-posts" ? (
            <>
              <span className="count">
                <span className="dot">●</span>
                {board && board.post_count ? board.post_count : 0} Posts{" "}
              </span>
            </>
          ) : (
            ""
          )}
        </div>
        {type === "board" ? (
          <div
            className="board-menu"
            ref={this.dropDownRef}
            onBlur={this.handleClickOutside}
          >
            <div className="dots" onClick={this.onBoardMenuClicked}>
              <MoreVertical size={20} />
            </div>
            <div
              class={`dropdown-content ${this.state.showMenu ? "show" : ""}`}
            >
              <span onClick={this.onEditBoard}>Edit Board</span>
              <span class="delete" onClick={this.onDeleteBoard}>
                Delete Board
              </span>
              {/* <span>Contact</span> */}
            </div>
          </div>
        ) : (
          ""
        )}
        {selected && (
          <>
            <span className="selected-tick">
              <Image src={selectedTick} />
            </span>
          </>
        )}
      </div>
    );
	}
}

const mapStateToProps = (state) => ({
	commonState: state.CommonState,
});
const mapDispatchToProps = {
	// getPosts: fetchPosts
};
BoardCard.propTypes = {
	// getPosts: PropTypes.func
	// onSelect: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(BoardCard);
