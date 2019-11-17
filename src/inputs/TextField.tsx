import * as React from "react";
import { Field, ErrorMessage, FieldProps } from "formik";
import {
  FormControl, FormHelperText,
  InputLabel, OutlinedInput,
} from '@material-ui/core'

import { InputAdornmentProps } from '@material-ui/core/InputAdornment'
import { makeStyles } from '@material-ui/core/styles';
import { uniqueId } from 'lodash';

interface TextFieldProps {
  name: string,
  label: string,
  labelWidth?: number,
  multiline?: boolean,
  type?: string,
  errors?: any,
  startAdornment?: React.ComponentType<InputAdornmentProps>,
  endAdornment?: React.ComponentType<InputAdornmentProps>
}

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
  label: {
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(-0.6),
    zIndex: 10
  },
  helpTxt: {
    marginLeft: theme.spacing(1),
  },
}));

export default (props: TextFieldProps) => {
  const classes = useStyles();
  const id = uniqueId('txt');
  return (
    <Field name={props.name}>
      {({ field, meta }: FieldProps) => (
        <FormControl error={meta.touched && !!meta.error} fullWidth className={classes.margin}>
          <InputLabel htmlFor={id} className={classes.label}>{props.label}</InputLabel>
          <OutlinedInput
            id={id}
            type={props.type}
            multiline={props.multiline}
            startAdornment={props.startAdornment}
            endAdornment={props.endAdornment}
            labelWidth={props.labelWidth || 60}
            autoComplete="off"
            {...field}
          />

          <ErrorMessage
            name={props.name}
            component={FormHelperText}
            className={classes.helpTxt}
          />

        </FormControl>
      )}
    </Field>

  );
}
