import React, { Fragment } from 'react';
import * as Yup from 'yup';
import { Form, FormikProps, Formik } from 'formik';
import { Contact, Address } from './contact.model';
import FormikFormInput from '../components/FormikFormInput';

const AddressValidationSchema = Yup.object().shape<Address>({
    street: Yup.string().required('Required'),
    city: Yup.string().required('Required'),
    state: Yup.string().required('Required'),
    zip: Yup.string().required('Required')
});

const ContactValidationSchema = Yup.object().shape<Contact>({
    firstName: Yup.string().min(2, 'Too Short!').max(70, 'Too Long!').required('Required'),
    lastName: Yup.string().min(2, 'Too Short!').max(70, 'Too Long!').required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    phone: Yup.string().required('Required'),
    address: AddressValidationSchema
});

const ContactForm: React.FC<{contact?: any, action: string, handleSubmit: (submittedContact: Contact) => void}> = (props) => {
    return (
        <Fragment>
            <Formik
                enableReinitialize={true}
            initialValues={props.contact}
            validationSchema={ContactValidationSchema}
            onSubmit={props.handleSubmit}
            render={(formikContact: FormikProps<Contact>) => (
                <Form>
                    <FormikFormInput fieldName="firstName" placeholder="First Name" />
                    <FormikFormInput fieldName="lastName" placeholder="Last Name" />
                    <FormikFormInput fieldName="phone" placeholder="Phone" />
                    <FormikFormInput fieldName="email" placeholder="Email" />
                    <FormikFormInput fieldName="address.street" placeholder="Street" />
                    <FormikFormInput fieldName="address.city" placeholder="City" />
                    <FormikFormInput fieldName="address.state" placeholder="State" />
                    <FormikFormInput fieldName="address.zip" placeholder="Zip" />
                    <button type="submit" className="btn btn-primary">Submit</button>
                </Form >
            )}
            />
        </Fragment>
    );
};

export default ContactForm;