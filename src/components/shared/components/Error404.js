import React from 'react';
import { Typography } from '@mui/material';

export const Error404 = () => {
    return <div className={"VerticalAlignCenter FullHeight"}>
        <Typography variant={'h3'} textAlign={'center'} justifyContent={'center'} style={{ margin: 'auto' }}>
            The page does not exist
        </Typography>
    </div>
}