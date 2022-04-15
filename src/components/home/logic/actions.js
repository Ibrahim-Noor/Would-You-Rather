import {
    SAVE_QUESTION_ANSWER_REQUEST,
    SAVE_QUESTION_ANSWER_SUCCESSFUL
} from './actionTypes';
import { _saveQuestionAnswer } from '../../../_DATA';
import { ADD_QUESTION_TO_USER_ANSWERS } from '../../login/logic/actionTypes';
import { UPDATE_QUESTION_AND_USERS } from '../../shared/logic/actionTypes';

export const saveQuestionAnswer = (authedUser, qid, answer) => dispatch => {
    dispatch({type: SAVE_QUESTION_ANSWER_REQUEST});
    return _saveQuestionAnswer({ authedUser, qid, answer }).then(() => {
        dispatch({ type: ADD_QUESTION_TO_USER_ANSWERS, payload: { qid, answer } });
        dispatch({ type: UPDATE_QUESTION_AND_USERS, payload: { authedUser, qid, answer } });
        dispatch({ type: SAVE_QUESTION_ANSWER_SUCCESSFUL })
    })
}