import React, { useEffect } from 'react';
import { Loading } from '../../shared/components/Loading';
import { LeaderboardCard } from './LeaderboardCard';

export const Leaderboard = props => {
    useEffect(() => {
        props.getAllUsers();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const isLoading = props.loadingAllUsers;

    const getUserInfoFromUser = user => ({
        name: user.name,
        avatarURL: user.avatarURL,
        answeredQuestions: Object.keys(user.answers).length,
        createdQuestions: user.questions.length,
        score: Object.keys(user.answers).length + user.questions.length
    })

    return (
        isLoading ? <Loading/> : <div>
            {Object.values(props.allUsers).length && Object.values(props.allUsers).map(
                user => getUserInfoFromUser(user)).sort((a,b) => b.score - a.score).map(userInfo => (
                    <LeaderboardCard userInfo={userInfo} />
            ))}
        </div>
    )
}