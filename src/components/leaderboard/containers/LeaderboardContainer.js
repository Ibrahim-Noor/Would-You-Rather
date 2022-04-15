import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../shared/logic/actions';
import { Leaderboard } from '../components/Leaderboard';

export const LeaderboardContainer = props => {
    const { allUsers, loadingAllUsers } = useSelector(state => {
        return {
            allUsers: state.shared.get('allUsers'),
            loadingAllUsers: state.shared.get('loadingAllUsers'),
    }});

    const dispatch = useDispatch();

    return <Leaderboard
        {...props}
        getAllUsers={() => dispatch(getAllUsers())}
        allUsers={allUsers}
        loadingAllUsers={loadingAllUsers}
    />
}