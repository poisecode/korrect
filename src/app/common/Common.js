import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";

class Common extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() { }

    render() {
        return (
            <div>Common Component {this.props.commonState}</div>
        )
    }
}

const mapStateToProps = state => ({
    commonState: state.CommonState
});
const mapDispatchToProps = {
    // getPosts: fetchPosts
}
Common.propTypes = {
    // getPosts: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Common);