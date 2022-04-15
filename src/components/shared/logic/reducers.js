import { Map } from 'immutable';
import {
    ADD_QUESTION_TO_ALL_QUESTIONS,
    GET_ALL_QUESTIONS,
    GET_ALL_USERS,
    SET_ALL_QUESTIONS,
    SET_ALL_USERS,
    UPDATE_QUESTION_AND_USERS
} from './actionTypes';
import { sortObjectsOfObjectByTimeStamp } from '../utils';

const initialState = new Map({
    allUsers: {},
    loadingAllUsers: false,
    allQuestions: {},
    loadingAllQuestions: false,
})

export const sharedReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_USERS:
            return state.merge({
                loadingAllUsers: true
            })
        case SET_ALL_USERS:
            return state.merge({
                allUsers: action.payload,
                loadingAllUsers: false
            });
        case GET_ALL_QUESTIONS:
            return state.merge({
                loadingAllQuestions: true
            })
        case SET_ALL_QUESTIONS:
            return state.merge({
                allQuestions: sortObjectsOfObjectByTimeStamp(action.payload),
                loadingAllQuestions: false
            });
        case UPDATE_QUESTION_AND_USERS:
            const questionId = action.payload.qid;
            const answer = action.payload.answer;
            const userId = action.payload.authedUser
            const allUsers = state.get('allUsers');
            const allQuestions = state.get('allQuestions');
            return state.merge({
                allQuestions: {
                    ...allQuestions,
                    [questionId]: {
                        ...allQuestions[questionId],
                        [answer]: {
                            ...allQuestions[questionId][answer],
                            votes: [...allQuestions[questionId][answer].votes, userId]
                        }
                    }
                },
                allUsers: {
                    ...allUsers,
                    [userId]: {
                        ...allUsers[userId],
                        answers: {
                            ...allUsers[userId].answers,
                            [questionId]: answer
                        }
                    }
                }
            })
        case ADD_QUESTION_TO_ALL_QUESTIONS:
            const question = action.payload;
            return state.merge({
                allQuestions: {
                    [question.id]: question,
                    ...state.get('allQuestions'),
                }
            })
        default:
            return state;
    }
}