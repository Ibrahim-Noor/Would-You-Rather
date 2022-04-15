import LoginContainer from '../../login/containers/LoginContainer';
import { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from './Navbar';
import { logoutUser } from '../../login/logic/actions';

export const RequireAuthentication = ComponentName => {

    class Wrapper extends Component {
        render() {
            const isLoggedIn = this.props.login.get('isLoggedIn');

            if (isLoggedIn) {
                const userData = this.props.login.get('userData');

                return <>
                    <Navbar name={userData.name} avatarURL={userData.avatarURL} logout={this.props.logout} />
                    <ComponentName {...this.props} userData={userData} /> :
                </>

            }
            return <LoginContainer isRedirected {...this.props} />
        }
    }

    const mapStateToProps = ({ login }) => ({
        login,
    });

    const mapDispatchToProps = dispatch => ({
        logout: () => {
            dispatch(logoutUser());

        }
    })

    return connect(mapStateToProps, mapDispatchToProps)(Wrapper);
}