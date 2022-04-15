import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Avatar, Button, CardHeader } from '@mui/material';
import Box from '@mui/material/Box';
import { useHistory } from 'react-router-dom';
import LinearProgressWithValue from './LinearProgressWithValue';
import { getAllVotersForAQuestion } from '../utils';

const QuestionCard = props => {

    const history = useHistory()

    const getQuestionActions = (isListing, userAnswers, question, userId) => {
        if (isListing) {
            return (
                <Button variant='contained' onClick={() => history.push(`/question/${question.id}`)}>
                    Poll
                </Button>
            );
        }
        if (!Object.keys(userAnswers).includes(question.id)) {
            return <>
                <Button
                    className={'OptionButton'}
                    variant={'outlined'}
                    disabled={props.savingQuestionAnswer}
                    onClick={() => props.saveQuestionAnswer(userId, question.id, 'optionOne')}>
                    {question.optionOne.text}
                </Button>
                <Button
                    className={'OptionButton'}
                    variant={'outlined'}
                    disabled={props.savingQuestionAnswer}
                    onClick={() => props.saveQuestionAnswer(userId, question.id, 'optionTwo')}>
                    {question.optionTwo.text}
                </Button>
            </>
        }

        return <>
            <LinearProgressWithValue
                totalVotesLength={getAllVotersForAQuestion(question).length}
                option={question.optionOne}
                isUserSelected={userAnswers[question.id] === 'optionOne'}
            />
            <LinearProgressWithValue
                totalVotesLength={getAllVotersForAQuestion(question).length}
                option={question.optionTwo}
                isUserSelected={userAnswers[question.id] === 'optionTwo'}
            />
        </>
    }

    return (
        <Card sx={{ maxWidth: 400, margin: 'auto', marginTop: '20px' }}>
            <CardHeader
                avatar={
                    <Avatar alt={props.author?.name} src={props.author?.avatarURL} />
                }
                title={`${props.author?.name} asks`}
            />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                Would you rather..
            </Typography>
            <Box>
                {getQuestionActions(props.isListing, props.userAnswers, props.question, props.userId)}
            </Box>
        </CardContent>
    </Card>
    );
}

export default QuestionCard;