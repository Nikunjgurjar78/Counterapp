import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Box, Typography } from '@mui/material'
import { useState } from 'react';

const Home = () => {

    const [ count , setCount ] = useState(0)

    const HandleIncrement = ()=>{
        setCount(count + 1)
    };

    const HandleDecrement = ()=>{
        setCount(count - 1)
    };


    return (
        <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >

            <Typography sx={{ mb: 5 }} variant="h3" > Count {count} </Typography>

            <Stack spacing={2} direction="row">
                <Button variant="contained" onClick={HandleIncrement} >Increment + 1</Button>
                <Button variant="contained" onClick={HandleDecrement }>Decrement - 1</Button>
            </Stack>

        </Box>
    )
}

export default Home