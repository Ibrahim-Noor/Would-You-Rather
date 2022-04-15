import { Map } from 'immutable';
import {
    SAVE_QUESTION_SUCCESSFUL, SAVE_QUESTION_REQUEST,
} from './actionTypes';

const initialState = new Map({
    savingQuestion: false,
})

export const addQuestionReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_QUESTION_REQUEST:
            return state.merge({
                savingQuestion: true
            })
        case SAVE_QUESTION_SUCCESSFUL:
            return state.merge({
                savingQuestion: false
            })
        default:
            return state
    }
}