import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styles from './role-selector.css';
import { closeErrorDialog } from '../../../actions/actions';

class RoleSelector extends React.Component {
    constructor(props) {
        super(props);
    }

    ok() {
        this.props.closeErrorDialog();
    }


    render() {
        return ([
            <div className={styles.roleContainer}>
                <form>
                    <div className={styles.digitContainer}>
                        <input type="text" maxLength="12" />
                    </div>
                    <div className={styles.role}>
                        <input type="radio" name="role" value="Employer" /><span>Employer</span>
                        <input type="radio" name="role" value="Validator" /><span>Validator</span>
                        <input type="radio" name="role" value="Student" /><span>Student</span>
                    </div>
                    <input type="submit" value="Login" className={styles.submit} />
                </form>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RoleSelector));
