import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
    Button,
    Card,
    CardActions,
    CardContent, CardHeader,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Typography
} from '@mui/material';
import { Loading } from '../../shared/components/Loading';

export const Login = props => {
    const history = useHistory();
    const [user, setUser] = useState('');

    if (props.isUserLoggedIn && !props.isRedirected) {
        history.push('/');
    }

    useEffect(() => {
        props.getAllUsers();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return !props.loadingAllUsers ?
        <div align={'center'}>
            <Card sx={{ maxWidth: 400 }}>
                <CardHeader
                    title="Welcome to Would You Rather"
                />
                <CardContent>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Select user</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={user}
                                label="Select user"
                                onChange={event => setUser(event.target.value)}
                            >
                                {Object.keys(props.allUsers).length && Object.keys(props.allUsers).map(
                                    userId => <MenuItem
                                        key={userId}
                                        value={props.allUsers[userId]}>
                                        {props.allUsers[userId].name}
                                    </MenuItem> )}
                            </Select>
                    </FormControl>
                </CardContent>
                <CardActions className={'JustifyContenCenter'}>
                    <Button
                        variant="contained"
                        size="medium"
                        disabled={!user}
                        onClick={() => props.loginUser(user)}>
                        Login
                    </Button>
                </CardActions>
            </Card>
        </div> : <Loading />

};