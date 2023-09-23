import * as React from 'react';
import { Box } from '@mui/material';

const BoxComponent = ({ children, style, ...rest }) => {
    return <Box 
    {...rest}
    style={{
                    ...style,
                }}
    
    >{children}</Box>
}

export default BoxComponent;