import React, { Component } from 'react';
import styles from './student-form.css';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import config from '../../../api/config';
import editImage from '../../../images/edit.svg'

export class StudentForm extends Component {
    constructor(props) {
        super(props);
    }

    uploadDocument() {

    }
    render() {
        return (
            <div className={styles.mainContainer}>
                <form>
                    <input type="text" placeholder="Document Name" />
                    <input className={styles.uploadInput} name="documentUpload" multiple="multiple" id="image-upload" onChange={(e) => this.uploadDocument(e, 'document')} type='file' accept="image/jpeg,image/gif,image/png,application/pdf" />

                </form>
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
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StudentForm));