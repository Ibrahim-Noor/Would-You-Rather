import * as React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { CheckBox } from '@mui/icons-material';

const LinearProgressWithLabel = props => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: '70%', mr: 1 }}>
                <LinearProgress variant="determinate" value={props.value} />
            </Box>
            <Box justifyContent={'space-between'} display={'flex'} style={{ flexGrow: '100' }}>
                <Box>
                    <Typography variant="body2" color="text.secondary">
                        {props.ProgressBarAfterText}
                    </Typography>
                </Box>
                {props.isUserSelected && <Box>
                    <CheckBox color={'success'} />
                </Box>}
            </Box>
        </Box>
    );
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

export const LinearWithValueLabel = props => {

    const getProgressBarAfterText = (optionVotes, totalVotesLength, progressBarValue) => {
        let value = `${optionVotes.length}/${totalVotesLength}`;
        const percent = parseInt(progressBarValue);
        return value + `  ${percent} %`;
    }
    const progressBarValue = parseInt((props.option.votes.length/props.totalVotesLength) * 100)
    return (
        <Box sx={{ width: '100%' }}>
            <Typography>
                Would you rather {props.option.text}
            </Typography>
            <LinearProgressWithLabel
                value={progressBarValue}
                ProgressBarAfterText={getProgressBarAfterText(props.option.votes, props.totalVotesLength, progressBarValue)}
                isUserSelected={props.isUserSelected}
            />
        </Box>
    );
}

export default LinearWithValueLabel