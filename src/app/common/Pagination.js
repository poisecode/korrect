import React from 'react';
import PropTypes from 'prop-types';
import { Button, Glyphicon } from "react-bootstrap";

const onLeftClick = (props) => {
  if (props.noUrl) {
    props.loadData(props.page - 1);
  } else {
    if (props.page > 0) {
      const params = new URLSearchParams(props.location.search);
      params.set("p", props.page - 1);
      props.history.push(`${props.history.location.pathname}?${params}`);
      // props.loadData(props.page - 1);
    }
  }

}

const onNextClick = (props) => {
  console.log(props, "d;");
  if (props.noUrl) {
    props.loadData(props.page + 1);
  } else {
    if (props.page < props.pageCount - 1) {
      console.log(props.page + 1, "plus");
      const params = new URLSearchParams(props.location.search);
      params.set("p", props.page + 1);
      props.history.push(`${props.history.location.pathname}?${params}`)
      // props.loadData(props.page + 1);
    }
  }

}

const Pagination = props => {
  return (
    <div className="pagination-wrapper">
      <Button className="primary-button inverse" onClick={() => onLeftClick(props)} disabled={props.page === 0} >
        <Glyphicon glyph="chevron-left" className="left-arrow" />
      </Button>
      <h5>{props.page + 1} of {props.pageCount}</h5>
      <Button className="primary-button inverse" onClick={() => onNextClick(props)} disabled={props.page === props.pageCount - 1}>
        <Glyphicon glyph="chevron-right" className="right-arrow" />
      </Button>
    </div>
  );
};

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  pageCount: PropTypes.number.isRequired,
  loadData: PropTypes.func.isRequired,

};
export default Pagination;