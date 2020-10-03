import React from 'react';
import { Box, Container } from '@material-ui/core';
import './comps.css'

export const Header = () => {
    return (
        <>
            <Container
            maxWidth="md"
            fixed
            className="header-container">
                <Box textAlign="center">
                Transactions 
                </Box>
            </Container>
        </>
    )
}
