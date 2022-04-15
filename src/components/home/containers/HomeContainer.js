import { Home } from '../components/Home';
import { useDispatch, useSelector } from 'react-redux';
import { getAllQuestions, getAllUsers } from '../../shared/logic/actions';

export const HomeContainer = props => {
    const { allUsers, allQuestions, loadingAllUsers, loadingAllQuestions } = useSelector(state => {
        return {
            allQuestions: state.shared.get('allQuestions'),
            allUsers: state.shared.get('allUsers'),
            loadingAllUsers: state.shared.get('loadingAllUsers'),
            loadingAllQuestions: state.shared.get('loadingAllQuestions')
    }});

    const dispatch = useDispatch();

    return <Home
        {...props}
        getAllUsers={() => dispatch(getAllUsers())}
        getAllQuestions={() => dispatch(getAllQuestions())}
        allUsers={allUsers}
        allQuestions={allQuestions}
        loadingAllUsers={loadingAllUsers}
        loadingAllQuestions={loadingAllQuestions}
    />
}