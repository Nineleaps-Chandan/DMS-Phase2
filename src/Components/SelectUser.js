import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';



const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 200,
  },
}));

const divStyle = {
  display: 'inline-block',
  paddingTop: '20px',
  paddingBottom: '30px',
};

export default function OutlinedTextFields() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: 'Chandan',
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <div className="selectUSer" style={divStyle}>
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="outlined-name"
          label="Select User"
          className={classes.textField}
          value={values.name}
          onChange={handleChange('name')}
          margin="normal"
          variant="outlined"
        />

        <FormControl variant="filled" className={classes.formControl}>
          <InputLabel htmlFor="filled-age-simple">Type</InputLabel>
          <Select
            value={values.age}
            onChange={handleChange}
            input={<FilledInput name="age" id="filled-age-simple" />}
          >

            <MenuItem value={10}>Intern</MenuItem>
            <MenuItem value={20}>Employee</MenuItem>
            {/* <MenuItem value={10}>Batch</MenuItem>
            <MenuItem value={10}>College</MenuItem> */}

          </Select>
        </FormControl>
      </form>
    </div>
  )
}