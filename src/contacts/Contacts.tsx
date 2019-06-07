import React, { useEffect, useState } from 'react';
import ContactList from "./ContactList";
import { getContacts } from './contacts.api';
import { Contact } from './contact.model';
import { Route } from 'react-router-dom';
import ContactDetail from './ContactDetail';
import apiUtils from '../utils/api.utils';
import ContactsApiErrorBoundary from '../components/ContactsApiErrorBoundary';
import ContactEdit from './ContactEdit';

const Contacts = ({ match }: any) => {
    const [contacts, setContacts] = useState<Contact[]>([]);
    useEffect(() => {
        apiUtils.getAll(getContacts, setContacts);
    }, []);
    return (
        <div className="col-md-10">
            <ContactsApiErrorBoundary>
                <Route exact={true} path={`${match.path}`} render={() => (
                    <ContactList contacts={contacts} />
                )} />
            </ContactsApiErrorBoundary>
            <Route exact={true} path={`${match.path}/:contactId`} component={ContactDetail} />
            <Route exact={true} path={`${match.path}/edit/:contactId`} component={ContactEdit} />
        </div>
    );
};

export default Contacts;