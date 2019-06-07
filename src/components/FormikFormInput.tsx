import React, { Fragment } from 'react';
import { Field, FieldProps } from 'formik';
import objectUtils from '../utils/object.utils';

const FormikFormInput: React.FC<{ fieldName: string, placeholder: string }> = (props) => {
    const { fieldName, placeholder } = props;
    const getObj = objectUtils.getNestedObject;
    let fieldInvalid: boolean = false;
    return (
        <div className="form-group">
            <label htmlFor={fieldName}>{placeholder}</label>
            <Field
            name={fieldName}
                render={({ field, form }: FieldProps<any>) => (
                <Fragment>
                    {fieldInvalid = getObj(form.touched, field.name) && !!getObj(form.errors, field.name) }
                    <input type="text" {...field} placeholder={placeholder} className={`form-control ${fieldInvalid ? 'is-invalid' : ''}`} />
                    <div className="invalid-feedback">
                        {fieldInvalid && getObj(form.errors, field.name) }
                    </div>
                </Fragment>
            )}
            />
        </div>
    )
}

export default FormikFormInput;