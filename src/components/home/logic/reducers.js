import { Map } from 'immutable';
import {
    SAVE_QUESTION_ANSWER_REQUEST, SAVE_QUESTION_ANSWER_SUCCESSFUL,
} from './actionTypes';

const initialState = new Map({
    savingQuestionAnswer: false
})

export const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_QUESTION_ANSWER_REQUEST:
            return state.merge({
                savingQuestionAnswer: true
            })
        case SAVE_QUESTION_ANSWER_SUCCESSFUL:
            return state.merge({
                savingQuestionAnswer: false
            })
        default:
            return state
    }
}