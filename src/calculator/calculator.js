import Button from '@mui/material/Button';
import Calcbutton from './Calcbutton';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import React from 'react';




const Calculator = () => {

    const [stuff, setStuff] = React.useState({
        inputvalu: "",
    });
    

    

    return (
        <Box
        sx={{
          width: 300,
          height: 300,
          backgroundColor: 'primary.dark',
          '&:hover': {
            backgroundColor: 'primary.main',
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
            <TextField id="filled-basic" value={stuff.inputvalu} inputProps={{style:{textAlign:'center'}}} label="Filled" variant="filled" />
            <br />
            <Calcbutton number={7} inputvalue={stuff.inputvalu} setsstuff={setStuff} />
            <Calcbutton number={8} inputvalue={stuff.inputvalu} setsstuff={setStuff} />
            <Calcbutton number={9} inputvalue={stuff.inputvalu} setsstuff={setStuff} />
            <br />
            <Calcbutton number={4} inputvalue={stuff.inputvalu} setsstuff={setStuff} />
            <Calcbutton number={5} inputvalue={stuff.inputvalu} setsstuff={setStuff} />
            <Calcbutton number={6} inputvalue={stuff.inputvalu} setsstuff={setStuff} />
            <br />
            <Calcbutton number={1} inputvalue={stuff.inputvalu} setsstuff={setStuff} />
            <Calcbutton number={2} inputvalue={stuff.inputvalu} setsstuff={setStuff} />
            <Calcbutton number={3} inputvalue={stuff.inputvalu} setsstuff={setStuff} />
            <br />
            <Calcbutton number={0} inputvalue={stuff.inputvalu} setsstuff={setStuff} />
        </Box>
    );
}

export default Calculator;