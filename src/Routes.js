import { Route, Switch } from 'react-router-dom';
import LoginContainer from './components/login/containers/LoginContainer';
import { RequireAuthentication } from './components/shared/components/RequireAuthentication';
import { HomeContainer } from './components/home/containers/HomeContainer';
import { SingleQuestionContainer } from './components/home/containers/SingleQuestionContainer';
import { AddQuestionContainer } from './components/addQuestion/containers/AddQuestionContainer';
import { Error404 } from './components/shared/components/Error404';
import { LeaderboardContainer } from './components/leaderboard/containers/LeaderboardContainer';


const Routers = () => {
    return <Switch>
        <Route exact path={'/login'} component={LoginContainer} />
        <Route exact path={'/'} component={RequireAuthentication(HomeContainer)} />
        <Route exact path={'/question/:id'} component={RequireAuthentication(SingleQuestionContainer)} />
        <Route exact path={'/add'} component={RequireAuthentication(AddQuestionContainer)} />
        <Route exact path={'/leaderboard'} component={RequireAuthentication(LeaderboardContainer)} />
        <Route path={'/'} component={Error404} />
    </Switch>
}

export default Routers;