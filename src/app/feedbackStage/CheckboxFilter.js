import React, { useState } from "react";
import { Button, Image } from "react-bootstrap";
import { connect } from "react-redux";
import checkboxUnselected from "../../assets/images/icons/checkbox-unselected.svg";
import checkboxSelected from "../../assets/images/icons/checkbox-selected.svg";

function CheckboxFilter(props) {
  const [checkboxList, setCheckboxList] = useState(props.checkboxList);
  const [isChecked, setIsChecked] = useState(false);
  const [search, setSearch] = useState("");

  const handleSelectAll = () => {
    let checkAll = props.checkboxList.every((item) => item.isChecked);
    let checkboxList = checkAll
      ? props.checkboxList.map((checkbox) => ({
          ...checkbox,
          isChecked: false,
        }))
      : props.checkboxList.map((checkbox) => ({
          ...checkbox,
          isChecked: true,
        }));
    props.handleCheckbox(checkboxList);
  };

  return (
    <div className="checkbox-filter-section">
      <div className="header">
        <h3 className="inter-semibold f-s-12 lh-21 secondary-2">
          {props.heading}
        </h3>
        <h6
          className="inter-regular f-s-11 lh-24 secondary-3 underline cp"
          onClick={handleSelectAll}
        >
          Select All
        </h6>
      </div>
      {props.isSearch && (
        <div className="search-checkbox">
          <input
            type="text"
            placeholder="Search..."
            className="search-input"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      )}

      {/* <div className="checkbox-body">
        {props.checkboxList.map((item) => {
          return (
            <div key={item.label} className="checkbox-div">
              <label
                onClick={() => handleCheckbox(item)}
                className="inter-medium secondary-2 f-s-12 lh-24 cp"
              >
                <Image
                  className="checkbox-icon"
                  src={item.isChecked ? checkboxSelected : checkboxUnselected}
                />
                
                {item.label}
              </label>
            </div>
          );
        })}
      </div>
      {props.addNewText && (
        <Button className="btn new-board-btn" onClick={props.onAddNewClicked}>
          {props.addNewText}
        </Button>
      )} */}
    </div>
  );
}

export default CheckboxFilter;
