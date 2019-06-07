import React, { useState, useEffect } from 'react';
import { Contact } from './contact.model';
import { getContact } from './contacts.api';
import apiUtils from '../utils/api.utils';
import ContactForm from './ContactForm';

const ContactEdit: React.FC<{ contactToEdit?: Contact, match: any }> = (props) => {
    const [contact, setContact] = useState<Contact>();
    const [contactId] = useState<number>(!!props.match ? +props.match.params.contactId : 0);
    useEffect(() => {
        if (!!props.contactToEdit) {
            setContact(props.contactToEdit);
        } else {
            apiUtils.getById<Contact>(contactId, getContact, setContact);
        }
    }, [contactId]);

    const onSubmit = async (submittedContact: Contact) => {
        console.log(submittedContact);
    }

    if (!!contact) {
        return (
            <ContactForm contact={contact} action="edit" handleSubmit={onSubmit} />
        );
    };
    return (
        <div>Loading...</div>
    )
};

export default ContactEdit;