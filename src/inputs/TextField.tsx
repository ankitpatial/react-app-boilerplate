import * as React from "react";
import { Field, ErrorMessage, FieldProps } from "formik";
import { FormControl, TextField as Input, FormHelperText } from '@material-ui/core'

interface TextFieldProps {
  name: string,
  label: string,
  type?: string,
  errors?: any
}

export default (props: TextFieldProps) => (
  <Field name={props.name}>
    {({ field, meta }: FieldProps) => (
      <FormControl error={meta.touched && !!meta.error} fullWidth>
        <Input
          {...field}
          label={props.label}
          type={props.type}
          autoComplete="off"
          error={meta.touched && !!meta.error}
        />
        <ErrorMessage
          name={props.name}
          component={FormHelperText}
        />
      </FormControl>
    )}
  </Field>

)
