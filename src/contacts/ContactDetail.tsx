import React, { useState, useEffect } from 'react';
import { Contact } from './contact.model';
import { getContact } from './contacts.api';
import apiUtils from '../utils/api.utils';
import { Link } from 'react-router-dom';
import routeUtils from '../utils/route.utils';

const ContactDetail: React.FC<{ match: any }> = (props) => {
    const [contact, setContact] = useState<Contact>();
    const [contactId] = useState<number>(!!props.match ? +props.match.params.contactId : 0);
    useEffect(() => {
        apiUtils.getById<Contact>(contactId, getContact, setContact);
    }, [contactId]);
    if (!!contact) {
        return (
            <div>
                <div> {contact.firstName} {contact.lastName}</div>
                <div> {contact.email}</div>
                <div> {contact.phone}</div>
                <Link to={`${routeUtils.getEditPath(props.match.path)}/${props.match.params.contactId}`} className="btn btn-success">Edit</Link>
            </div>
        );
    };
    return (
        <div>Loading...</div>
    )
};

export default ContactDetail;