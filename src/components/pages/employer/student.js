import React, { Component } from 'react';
import styles from './student.css';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import config from './../../../api/config';

export class Student extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>

            </div>
        )
    }
}
const mapStateToProps = state => ({
});
const mapDispatchToProps = dispatch => {
    return {

    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Student));