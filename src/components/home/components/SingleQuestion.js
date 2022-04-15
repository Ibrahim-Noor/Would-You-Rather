import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import QuestionCard from './QuestionCard';
import { Loading } from '../../shared/components/Loading';

export const SingleQuestion = props => {
    const { id } = useParams();
    const history = useHistory();

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        props.getAllUsers();
        props.getAllQuestions();
        setLoading(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const isLoading = props.loadingAllQuestions || props.loadingAllUsers || loading;

    if (!isLoading && !Object.keys(props.allQuestions).includes(id)) {
        history.push('/error-404');
    }

    const getQuestionAuthor = question => props.allUsers[question?.author];

    const question = props.allQuestions[id];

    return isLoading? <Loading /> : <div>
        {question && <QuestionCard
            question={question}
            isListing={false}
            userAnswers={props.userData.answers}
            userId={props.userData.id}
            author={getQuestionAuthor(props.allQuestions[id])}
            saveQuestionAnswer={props.saveQuestionAnswer}
            savingQuestionAnswer={props.savingQuestionAnswer}
        />}
        </div>
}