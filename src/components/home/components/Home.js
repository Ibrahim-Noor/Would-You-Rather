import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import { QuestionsList } from './QuestionsList';
import { Loading } from '../../shared/components/Loading';

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{p: 3}}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export const Home = props => {
    const [value, setValue] = useState(0);

    useEffect(() => {
        props.getAllUsers();
        props.getAllQuestions();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const getUnansweredQuestions = () => {
        if (Object.keys(props.allQuestions).length) {
            return Object.values(props.allQuestions).filter(question => !Object.keys(
                props.userData.answers).includes(question.id))
        }
        return []
    }

    const getAnsweredQuestions = () => {
        if (Object.keys(props.allQuestions).length) {
            return Object.values(props.allQuestions).filter(question => Object.keys(
                props.userData.answers).includes(question.id))
        }
        return []
    }

    const isLoading = props.loadingAllUsers || props.loadingAllQuestions;

    return (
        isLoading ? <Loading/> :
            <Grid container sx={{width: '100%'}}>
                <Grid item xs={0} lg={2} />
                <Grid item xs={12} lg={8}>
                    <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="UnAnswered Questions" {...a11yProps(0)} />
                            <Tab label="Answered Questions" {...a11yProps(1)} />
                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>
                        <QuestionsList
                            questions={getUnansweredQuestions()}
                            allUsers={props.allUsers}
                            userAnswers={props.userData.answers}
                            userId={props.userData.id}
                        />
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <QuestionsList
                            questions={getAnsweredQuestions()}
                            allUsers={props.allUsers}
                            userAnswers={props.userData.answers}
                            userId={props.userData.id}
                        />
                    </TabPanel>
                </Grid>
                <Grid item xs={0} lg={2}/>
            </Grid>
    );
}
