import React from 'react';
import QuestionCard from './QuestionCard';

export const QuestionsList = props => {
    const getQuestionAuthor = question => props.allUsers[question.author];

    return props.questions.map(question => <div key={question.id}>
            <QuestionCard
                question={question}
                author={getQuestionAuthor(question)}
                userAnswers={props.userAnswers}
                isListing={true}
                userId={props.userId}
            />
        </div>
    );
}