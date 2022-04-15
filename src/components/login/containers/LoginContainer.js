import * as PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Login } from '../components/Login';
import { loginUser } from '../logic/actions';
import { getAllUsers } from '../../shared/logic/actions';

const LoginContainer = props => {
    const { isLoggedIn, allUsers, loadingAllUsers } = useSelector(state => {
        return {
            isLoggedIn: state.login.get('isLoggedIn'),
            allUsers: state.shared.get('allUsers'),
            loadingAllUsers: state.shared.get('loadingAllUsers')
    }});

    const dispatch = useDispatch();

    return <Login
        getAllUsers={() => dispatch(getAllUsers())}
        loginUser={userData => dispatch(loginUser(userData))}
        isUserLoggedIn={isLoggedIn}
        allUsers={allUsers}
        loadingAllUsers={loadingAllUsers}
        isRedirected={props.isRedirected}
    />
};

LoginContainer.propTypes = {
    isRedirected: PropTypes.bool
}

LoginContainer.defaultProps = {
    isRedirected: false
}

export default LoginContainer;


