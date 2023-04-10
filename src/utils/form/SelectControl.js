// import React from "react";
// import PropTypes from "prop-types";
// import _ from "lodash";
// import Select from "react-select";

// const SelectControl = props => {

//   const {
//     classes = {}, onBlur, valueLink, options, multiple, searchable, placeholder,
//     noOptionCustom = () => <div>No options</div>,
//     onChangeCallback = () => { },
//     onInputChange = () => { },
//     disabled = false
//   } = props;

//   // const filterOptions = (allOptions, filter, currentValues) => {
//   //     return allOptions.filter(
//   //         option =>
//   //             (option.labelString || option.label)
//   //                 .toLowerCase()
//   //                 .indexOf(filter.toLowerCase()) !== -1
//   //     );
//   // };

//   // const customFilterOption = (option, rawInput) => {
//   //     const words = rawInput.split(' ');
//   //     return words.reduce(
//   //         (acc, cur) => acc && option.label.toLowerCase().includes(cur.toLowerCase()),
//   //         true,
//   //     );
//   // };

//   const optionsDict = _.keyBy(options, "value");
//   const stateValue = valueLink.value;
//   let valueOption = "";
//   if (multiple && stateValue.length > 0) {
//     valueOption = stateValue.map(value => optionsDict[value]);
//   }
//   if (!multiple && stateValue) {
//     valueOption = optionsDict[stateValue];
//   }

//   const onChangeInternal = selectedOption => {
//     if (multiple) {
//       valueLink.requestChange(selectedOption.map(option => option.value));
//       // onBlur(stateValue);
//       // ON BLUR METHOD IS REMOVED AND INSTED PASSED AS CALLBACK METHOD.
//       onChangeCallback(onBlur);
//     } else {
//       valueLink.requestChange(selectedOption ? selectedOption.value : "");
//       // onBlur(stateValue);
//       // ON BLUR METHOD IS REMOVED AND INSTED PASSED AS CALLBACK METHOD.
//       onChangeCallback(onBlur);
//     }
//   };

//   return (
//     <Select
//       // menuIsOpen={true}
//       isMulti={multiple}
//       value={valueOption}
//       onChange={onChangeInternal}
//       onInputChange={onInputChange}
//       onBlur={onBlur}
//       simpleValue={false}
//       options={options}
//       isClearable={false}
//       isSearchable={searchable}
//       isDisabled={disabled}
//       // filterOptions={filterOptions}
//       // filterOptions={customFilterOption}
//       placeholder={placeholder}
//       noOptionsMessage={noOptionCustom}
//       className="custom-select-container"
//       classNamePrefix="custom-select"
//     />
//   );
// };

// SelectControl.propTypes = {
//   // classes: PropTypes.object.isRequired,
//   onBlur: PropTypes.func.isRequired,
//   valueLink: PropTypes.object.isRequired,
//   options: PropTypes.array.isRequired,
//   multiple: PropTypes.bool,
//   placeholder: PropTypes.string
// };

// SelectControl.defaultProps = {
//   multiple: false,
//   placeholder: 'Select Values'
// };

// export default SelectControl;
