import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styles from './notify.css';
import { closeErrorDialog } from '../../../actions/actions';

class Notify extends React.Component {

    constructor(props) {
        super(props);
    }

    ok() {
        this.props.closeErrorDialog();
    }
    render() {
        console.log(this.props);
        return ([
            <div className={styles.notifyDialog}>
                <div className={styles.notifyDialogContainer}>
                    <span className={styles.header}>Oops!!</span>
                    <span className={styles.message}>{this.props.message}</span>
                    <button className={styles.ok} onClick={() => this.ok()}>Ok</button>
                </div>
            </div>
        ])
    }
}

const mapStateToProps = state => ({
    selectedTab: state.dashboard.selectedTab,
    viewClaims: state.dashboard.viewClaims,
    url: state.logItIn.url,
    searchKeyword: state.dashboard.searchKeyword,
    message: state.common.message
});
const mapDispatchToProps = dispatch => {
    return {
        openTab: (data) => dispatch(openTab(data)),
        getClaim: (claim) => dispatch(getClaim(claim)),
        closeErrorDialog: () => dispatch(closeErrorDialog())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Notify));
