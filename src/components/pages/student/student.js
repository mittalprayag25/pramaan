import React, { Component } from 'react';
import styles from './student.css';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import config from './../../../api/config';
import editImage from '../../../images/edit.svg'

export class Student extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (

            <div className={styles.mainContainer}>

                <table>
                    <thead>
                        <tr>
                            <th className={styles.smClm}>Document Id</th>
                            <th className={styles.smClm}>Document Name</th>
                            <th className={styles.smClm}>Status</th>
                            <th className={styles.smClm}>Pending with</th>
                            <th className={styles.smClm}></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className={styles.tdColumn}>12</td>
                            <td className={styles.tdColumn}>License</td>
                            <td className={styles.tdColumn}>pending</td>
                            <td className={styles.tdColumn}>dean</td>
                            <td className={styles.tdColumn}><img src={editImage} /></td>
                        </tr>
                    </tbody>
                </table>

                <div>
                    <button className={styles.addDocument}>Add New Document</button>
                </div>
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