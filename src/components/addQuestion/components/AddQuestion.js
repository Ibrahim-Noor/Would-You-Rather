import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { AddQuestionForm } from './AddQuestionForm';


export const AddQuestion = props => {
    return (
        <Card sx={{maxWidth: 450, margin: 'auto', marginTop: '20px'}}>
            <CardHeader
                title="Create New Question"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    Complete the Question
                </Typography>
                <Typography variant="h5" color="text.primary">
                    Would You Rather
                </Typography>
                <AddQuestionForm
                    saveQuestion={props.saveQuestion}
                    savingQuestion={props.savingQuestion}
                    userId={props.userData.id}
                />
            </CardContent>
        </Card>
    );
}