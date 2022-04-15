import React from 'react';
import { CircularProgress } from '@mui/material';

export const Loading = () => {
    return <div className={"VerticalAlignCenter FullHeight"}>
        <CircularProgress color="primary"  />
    </div>
}