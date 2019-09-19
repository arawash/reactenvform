import React from 'react';
//import './App.css';
import { makeStyles } from '@material-ui/styles';
// import { Demo } from "./location";
// import Test from './test';
// import { red } from '@material-ui/core/colors';
// import { Formctrl } from './fomctrl'
// import BottomAppBar from "./Appbar"
// import ButtonAppBar from "./hbr"
// import { Grow } from '@material-ui/core';
// import { Fade } from '@material-ui/core';
// import Basic from './formic';
import Test from './test';


// import Box from "@material-ui/core/Box"
// import Button from '@material-ui/core/Button';
// import Container from "@material-ui/core/Container"
// import TodoComponent from "./todo/todopart";
const useStyles = makeStyles(theme => ({
  root: {
    button: {
     // color: red,
    },
  }
}
)
);
function App() {
  const classes = useStyles();
  return (
    <div className="App">
      {/* <ButtonAppBar /> */}
      {/* <TodoComponent /> */}
      {/* <Formctrl /> */}
      <Test />
      {/* <Basic/> */}
      {/* <Demo /> */}
      {/* <BottomAppBar /> */}
      Environment Gioloation Data Form ...
    </div>
  );
}
export default App;
