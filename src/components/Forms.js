import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const Forms = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(4),
      width: 300,
    },
  },
}));

export default function ValidationTextFields() {
  const classes = Forms();

  return (



    

    <div className='containers'>
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField error id="standard-error" label="First Name" defaultValue="First Name" />
        <TextField
          error
          id="standard-error-helper-text"
          label="Last Name"
          defaultValue="Last Name"
         
        />
      </div>

      
      <div>
        <TextField
          error
          id="filled-error"
          label="City"
         
          variant="filled"
        />
        <TextField
          error
          id="filled-error-helper-text"
          label="DOB"
          defaultValue=' dd/mm/yyyy'
         
          // helperText="Incorrect entry."
          variant="filled"
        />
        
      </div>

      
      <div>
        <TextField
          error
          id="outlined-error"
          label="Mobile No."
         defaultValue= '+91'
          variant="outlined"
        />
        <TextField
          error
          id="outlined-error-helper-text"
          label="Email"
         
          // helperText="Incorrect entry."
          variant="outlined"
        />
      </div>
    </form>
    </div>
  );
}