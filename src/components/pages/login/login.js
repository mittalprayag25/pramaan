import React, { Component } from 'react';
import styles from './login.css';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import config from '../../../api/config';

export class Login extends Component {
    constructor(props) {
        super(props);
    }

    openAccount() {
        this.props.history.push('/selector');//eslint-disable-line 
    }

    importAccount() {

    }

    render() {

        return ([
            <div className={styles.loginContainer}>
                <h1 className={styles.header}>Digi Pramaan</h1>
                <div className={styles.container}>
                    <button className={styles.optionButton} onClick={() => this.openAccount()}>Create New Account</button>
                    <button className={styles.optionButton} onClick={() => this.importAccount()}>import an Account</button>
                </div>
            </div>
        ])
    }
}
const mapStateToProps = state => ({
});
const mapDispatchToProps = dispatch => {
    return {

    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));