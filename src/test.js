import React from 'react'
import { useState } from 'react'
import Switch from '@material-ui/core/Switch/';
import Pickers from '@material-ui/pickers';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
// import Typography from '@material-ui/core/Typography';
// import lll from '@material-ui/core/Paper/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box/Box'
import { Button, FormControlLabel } from '@material-ui/core'
import Icon from '@material-ui/core/Icon';
//import { Icon } from '@material-ui/core';
import TextField from '@material-ui/core/TextField'
import FormGroup from '@material-ui/core/FormGroup'
import FormLabel from '@material-ui/core/FormLabel';
import Send from '@material-ui/icons/Send';
//  import FormLabel from '@material-ui/core/FormLabel/FormLabel'
// import DeleteIcon from '@material-ui/icons/Delete';
// import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
// import SaveIcon from '@material-ui/icons/Save';
// import IconButton from '@material-ui/core/IconButton';
// ...............................................
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

// import { createStyles,/* makeStyles*/ Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select'
import { red } from "@material-ui/core/colors";

// ...............................................
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@material-ui/styles';


// ............................................................
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
// ............................................................


// Configure JSS

const theme = createMuiTheme({
  direction: 'rtl', // Both here and <body dir="rtl">
  palette: {
    //type: 'dark',
  },
});
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

function RTL(props) {
  return (
    <StylesProvider jss={jss}>
      {props.children}
    </StylesProvider>
  );
}

const useStyles = makeStyles(theme => ({
  // button: {
    // margin: theme.spacing(1),
    // },
    // leftIcon: {
      // marginRight: theme.spacing(1),
      // },
      // rightIcon: {
        // marginLeft: theme.spacing(1),
        // },
        // iconSmall: {
          // fontSize: 20,
          // }, Paper: {
  // padding: theme.spacing(3, 4)
  // }
}));

// age: '',
// Chose , setChose 
// name , setName
// Desc , setDesc , 
// Kind , setKind
// Latitude , Latitude
// Longitude , setLongitude 
// what: '',

// [event.target.name] : event.target.value
// const [state, setState] = useState({
  // left: 0,
  // top: 0,
  // width: 100,
  // height: 100,
  // age: '',
  // name: '',
  // desc: '',
  // kind: '',
  // latitude: '',
  // longitude: '',
// name: '',
// what: '',
// });
// const handleChange = (event) => {
  // const thisName = event.target.name;
  // const [values, setValues] = React.useState({
    // setValues(
// [event.target.name] = event.target.value
// )}
const reta = (classes, FormControl) => {
}
const Test = () => {
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
  
  function handleDateChange(date) {
    setSelectedDate(date);
  }
  const classes = useStyles();
  const [FormControlState, setFormControlState] = useState({});
  const onChange = (event) => {
    setFormControlState({ ...FormControlState, [event.target.name]: event.target.value });
    console.log(FormControlState);
    
  };
  return (
    <RTL>
      <ThemeProvider theme={theme}>
        <div dir="rtl"></div>
        <Box>
          <div>
            <FormGroup>
              <TextField
                id="outlined-name"
                name="Name" label="الاسم"
                className={classes.textField}
                margin="dense"
                onChange={onChange} />
              <FormControl>
                <TextField
                  type="text"
                  defaultValue=""
                  id=" new-todo"
                  name="kind"
                  margin="dense"
                  label="النوع"
                  variant="outlined"
                  onChange={onChange}
                />
              </FormControl>
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Date picker inline"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
              <TextField
                type="text"
                defaultValue=""
                name="what"
                label="ايه"
                variant="outlined"
                onChange={onChange}
                margin="dense" id=" new-todo" />
              <TextField
                type="text-erea"
                name="desc"
                label="الوصف"
                multiline
                rows="4"
                defaultValue=""
                id=" new-todo"
                margin="dense"
                onChange={onChange}
                variant="outlined" />
              <FormControlLabel
                control={<Switch />}
                name="مخالف"
                checked=""
                value=""
                onChange={onChange}
                label="مخالف" />
              <Select>

              </Select>
              {/* <FormControl>
                <FormLabel>الحالة</FormLabel>
                <RadioGroup onChange={onChange}>
                  <FormControlLabel onChange={onChange} value="sss" control={<Radio />} name="مخالف" label="مخالف" />
                  <FormControlLabel onChange={onChange} value="sssdd" control={<Radio />} name="مطابق" label="مطابق" />
                  <FormControlLabel onChange={onChange} value="sssddAA" control={<Radio />} name="متوقف" label="متوقف" />
                </RadioGroup>
              </FormControl> */}
              <TextField
                type="number"
                defaultValue=""
                name="latitude"
                label="latitude:."
                id=" new-todo"
                variant="outlined"
                // onChange={handleChange}
                onChange={onChange}
                margin="dense" />
              <TextField
                type="number"
                name="longitude"
                label="longitude"
                defaultValue=""
                id=" new-todo"
                margin="dense"
                variant="outlined"
                onChange={onChange}
              />
              <Button size="large" variant="contained" color="primary">
                Save<Icon className={classes.rightIcon}>  <Send /></Icon>
              </Button>
            </FormGroup>
          </div>
        </Box>
      </ThemeProvider>
    </RTL>
  )
}
export default Test;


