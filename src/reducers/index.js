import { combineReducers } from 'redux';
import { loginReducer } from '../components/login/logic/reducers';
import { sharedReducer } from '../components/shared/logic/reducers';
import { homeReducer } from '../components/home/logic/reducers';
import { addQuestionReducer } from '../components/addQuestion/logic/reducer';

const rootReducer = combineReducers({
    login: loginReducer,
    shared: sharedReducer,
    home: homeReducer,
    addQuestion: addQuestionReducer
});

export default rootReducer;