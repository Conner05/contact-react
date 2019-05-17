import React, { useEffect, useState } from 'react';
import ContactList from "./ContactList";
import { getContacts } from './contacts.api';
import { Contact } from './Contact';
import { Route } from 'react-router-dom';
import ContactDetail from './ContactDetail';
import ErrorBoundary from '../components/ErrorBoundary';
import dataFetcher from '../utils/api.utils';

const Contacts = ({ match }: any) => {
    const [contacts, setContacts] = useState<Contact[]>([]);
    useEffect(() => {
        dataFetcher.getAll(getContacts, setContacts);
    }, []);
    return (
        <div className="col-md-10">
            <ErrorBoundary>
                <Route exact={true} path={`${match.path}`} render={() => (
                    <ContactList contacts={contacts} />
                )} />
            </ErrorBoundary>
            <Route path={`${match.path}/:contactId`} component={ContactDetail} />
        </div>
    );
};

export default Contacts;