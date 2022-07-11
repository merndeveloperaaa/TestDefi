import React from 'react';
import styled, { createGlobalStyle } from "styled-components";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

const GlobalStyles = createGlobalStyle`
  input[type=number]::-webkit-inner-spin-button, 
  input[type=number]::-webkit-outer-spin-button {  

    opacity: 1;

  }
`;

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'white',
    fontSize: '18px',
    top: '-13px'
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'white',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'white',
    },
    '&:hover fieldset': {
      borderColor: 'white',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white',
    },
    border: 'solid 1px white',
    borderRadius: '6px',
    background: 'white',
  },
  '& .MuiOutlinedInput-input': {
    padding: '7px 14px'
  }
});

const ComposedTextField = (props) => {
  return (
    <>
      <GlobalStyles />
      <Box
        component="div"
        noValidate
        autoComplete="off"
        width="30%"
      >
        <CssTextField
          {...props}
          style={{ margin: 0 }}
          InputProps={{ inputProps: { min: 1, max: 50 } }}
        />
      </Box >
    </>
  );
}

export default ComposedTextField;