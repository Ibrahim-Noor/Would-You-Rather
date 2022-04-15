import React from 'react';
import { AddQuestion } from '../components/AddQuestion';
import { useDispatch, useSelector } from 'react-redux';
import { saveQuestion } from '../logic/actions';

export const AddQuestionContainer = props => {
    const {savingQuestion} = useSelector(state => ({
        savingQuestion: state.addQuestion.get('savingQuestion')
    }));

    const dispatch = useDispatch();

    return <AddQuestion
        {...props}
        saveQuestion={(question, onSuccessCb) => dispatch(saveQuestion(question, onSuccessCb))}
        savingQuestion={savingQuestion}
    />
}