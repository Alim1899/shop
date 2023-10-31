import {Fragment} from 'react'
import classes from './Cases.module.css'
import {Field, ErrorMessage} from 'formik';
import TextError from './TextError';
const Checkbox = (props) => {
    const {label, options, name, ...rest} = props;
  return (
    <div className={classes.formControl && classes.radio}>
    <label htmlFor={name}>{label}</label>
    <div className={classes.optGroup}>
      <Field id={name} name={name} {...rest}>
        {({ field }) => {
          return options.map((option) => {
            return (
              <Fragment key={option.key}>
                <input
                  type="checkbox"
                  {...field}
                  id={option.value}
                  value={option.value}
                  checked={field.value.includes(option.value)}
                />
                <option>{option.key}</option> 
              </Fragment>
            );
          });
        }}
      </Field>
    </div>

    <ErrorMessage name={name} component={TextError} />
  </div>
  )
}

export default Checkbox