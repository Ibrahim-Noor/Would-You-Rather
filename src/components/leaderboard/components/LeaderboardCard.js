import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export const LeaderboardCard = ({ userInfo }) => {
    return (
        <Card sx={{display: 'flex', maxWidth: 500, margin: 'auto', marginTop: '20px'}}>
            <CardMedia
                component="img"
                sx={{width: 151, height: 151}}
                image={userInfo.avatarURL}
                alt={userInfo.name}
            />
            <CardContent className={'LeaderboardCardContent'}>
                <Typography component="div" variant="h5">
                    {userInfo.name}
                </Typography>
                <Box>
                    <Typography variant={"body1"}>
                        Answered Questions      {userInfo.answeredQuestions}
                    </Typography>
                    <Typography variant={"body1"}>
                        Created Questions      {userInfo.createdQuestions}
                    </Typography>
                </Box>
            </CardContent>
            <Box className={'LeaderboardCardScore'}>
                <Typography variant={"body1"}>
                    Total Score
                </Typography>
                <Typography variant={"h3"}>
                    {userInfo.score}
                </Typography>
            </Box>
        </Card>
    );
}