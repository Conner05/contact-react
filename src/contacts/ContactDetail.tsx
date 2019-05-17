import React, { useState, useEffect } from 'react';
import { Contact } from './Contact';
import { getContact } from './contacts.api';
import dataFetcher from '../utils/api.utils';

const ContactDetail: React.FC<{ match: any }> = (props) => {
    const [contact, setContact] = useState<Contact>();
    const [contactId] = useState<number>(!!props.match ? +props.match.params.contactId : 0);
    useEffect(() => {
        dataFetcher.getById<Contact>(contactId, getContact, setContact);
    }, [contactId]);
    if (!!contact) {
        return (
            <div>
                <div> {contact.firstName}</div>
                <div> {contact.lastName}</div>
                <div> {contact.email}</div>
                <div> {contact.phone}</div>
            </div>
        );
    };
    return (
        <div>Loading...</div>
    )
};

export default ContactDetail;