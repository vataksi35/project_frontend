import './App.css';
import React from 'react';
import Button from '@mui/material/Button';
import { SnackbarProvider, useSnackbar } from 'notistack';


function MyApp() {
  const { enqueueSnackbar } = useSnackbar();

  const handleClickVariant = (variant) => () => {
    enqueueSnackbar('You have booked the room successfully!', { variant });
  };

  return (
    <React.Fragment>
      <Button sx={{color:"white",fontFamily:"Kanit"}} onClick={handleClickVariant('success')}>Book</Button>
    </React.Fragment>
  );
}

export default function App() {
  return (
    <SnackbarProvider maxSnack={3}>
      <MyApp />
    </SnackbarProvider>
  );
}