import React, { useState } from "react";
import { Checkbox } from "react-bootstrap";
import CustomNavbar from "../common/CustomNavbar";
import CheckboxFilter from "./CheckboxFilter";
import FeedbackCard from "./feedbackCard";
import PostButtons from "./postButtons";

const FeedbackStageContainer = (props) => {
  const [checkAll, setCheckAll] = useState(false);
  const [selectedCard, setSelectedCard] = useState("");

  function handleChange() {
    setCheckAll(!checkAll);
  }

  function handleBoardCheckbox() {
    console.log("hello");
  }
  function onCreateBoard() {}

  function handleClick(key) {
    setSelectedCard(key);
  }

  return (
    <>
      <CustomNavbar history={props.history} />
      <div className="feedback-section ">
        <div className="board-filters-section">
          {/* cards */}
          <CheckboxFilter
            key="board"
            heading={"Source"}
            isSearch={false}
            checkboxList={[]}
            handleCheckbox={(item) => handleBoardCheckbox(item)}
            addNewText={"+ New Board"}
            onAddNewClicked={onCreateBoard}
          />
        </div>
        <div
          className="section-right"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            <div className="selectall">
              <Checkbox checked={checkAll} onChange={handleChange} />
              <p>select all 2 comments</p>
            </div>
            <div className="fs-cards-container">
              {[1, 2].map((item, i) => (
                <FeedbackCard
                  key={i}
                  handleSelected={(key) => handleClick(key)}
                  selectedKey={selectedCard}
                  currentKey={`key-${i}`}
                  checkAll={checkAll}
                />
              ))}
            </div>
          </div>

          {(checkAll || selectedCard.length > 0) && (
            <div className="bottom-card" style={{ textAlign: "center" }}>
              <PostButtons selectedComments={checkAll ? "02" : `01`} />
            </div>
          )}
        </div>
      </div>
      <div></div>
    </>
  );
};

export default FeedbackStageContainer;
