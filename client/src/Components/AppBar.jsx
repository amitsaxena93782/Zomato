import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{boxShadow: 0}} position="static" color='none' >
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
          <Button>Login</Button>
          <Button variant='outlined'>Create an account</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
