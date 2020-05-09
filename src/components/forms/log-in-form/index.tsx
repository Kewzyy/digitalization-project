import * as React from 'react'
import { LogInFormPropsType } from './types'
import { Form, Field } from 'react-final-form'
import { TextField, Button } from '@material-ui/core'
export const LogInForm: React.FC<LogInFormPropsType> = () => {
  return (
    <React.Fragment>
      <Form
        onSubmit={formObj => {
          console.log('formObj', formObj)
        }}
        validate={values => {
          const errors = {
            username: '',
            password: '',
          }
          if (!values.username) {
            errors.username = 'Required'
          }
          if (!values.password) {
            errors.password = 'Required'
          }
          return errors
        }}
        render={({ handleSubmit, form, submitting, values, pristine }) => (
          <form onSubmit={handleSubmit}>
            <Field name='username'>
              {({ input, meta }) => (
                <div>
                  <TextField
                    {...input}
                    error={Boolean(meta.error && meta.touched)}
                    label='Username'
                    helperText={meta.error}
                  />
                </div>
              )}
            </Field>
            <Field name='password'>
              {({ input, meta }) => (
                <div>
                  <TextField
                    {...input}
                    type='password'
                    autoComplete='current-password'
                    error={Boolean(meta.error && meta.touched)}
                    label='Password'
                    helperText={meta.error}
                  />
                </div>
              )}
            </Field>
            <Button
              type='submit'
              disabled={submitting || pristine}
              variant='contained'
              color='primary'>
              Log in
            </Button>
            <pre>{JSON.stringify(values, () => {}, 2)}</pre>
          </form>
        )}
      />
    </React.Fragment>
  )
}
