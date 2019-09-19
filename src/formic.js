import React from 'react';
import { Formik } from 'formik';

import Switch from '@material-ui/core/Switch/';

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

const Basic = () => (
    <div>
        <h1>Anywhere in your app!</h1>
        <Formik
            initialValues={{ email: '', password: '' }}
            validate={values => {
                let errors = {};
                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
            }) => (
                    
                    <FormGroup>
                    <form onSubmit={handleSubmit}>



<FormControl>

                        <input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            />
                        {errors.email && touched.email && errors.email}
                            </FormControl>
                        <input
                            type="password"
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                            />
                        {errors.password && touched.password && errors.password}
                        <button type="submit" disabled={isSubmitting}>
                            Submit
          </button>
                    </form>
                </FormGroup>
                )}
        </Formik>
    </div>
);

export default Basic;