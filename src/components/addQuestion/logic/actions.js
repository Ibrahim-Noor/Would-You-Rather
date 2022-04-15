import { SAVE_QUESTION_REQUEST, SAVE_QUESTION_SUCCESSFUL } from './actionTypes';
import { _saveQuestion } from '../../../_DATA';
import { ADD_QUESTION_TO_ALL_QUESTIONS } from '../../shared/logic/actionTypes';
import { ADD_QUESTION_TO_USER_QUESTIONS } from '../../login/logic/actionTypes';

export const saveQuestion = (question, onSuccessCb) => dispatch => {
    dispatch({ type: SAVE_QUESTION_REQUEST });
    return _saveQuestion(question).then(response => {
        dispatch({ type: ADD_QUESTION_TO_ALL_QUESTIONS, payload: response });
        dispatch({ type: ADD_QUESTION_TO_USER_QUESTIONS, payload: response.id })
        dispatch({ type: SAVE_QUESTION_SUCCESSFUL });
        if (onSuccessCb) {
            onSuccessCb();
        }
    })
}