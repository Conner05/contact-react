import React from 'react';
import { Contact } from './Contact';
import { Link } from 'react-router-dom';
import ErrorBoundary from '../components/ErrorBoundary';

const ContactList: React.FC<{ contacts: Contact[] }> = (props) => {
  return (
    <ErrorBoundary>
      <div className="list-group">
        {props.contacts.map((contact, index) => <ContactListItem key={index} contact={contact} />)}
      </div>
    </ErrorBoundary>
  )
};

const ContactListItem: React.FC<{ contact: Contact }> = (props) => {
  return (
    <Link to={`/contacts/${props.contact.id}`} className="list-group-item list-group-item-action">{props.contact.id}: {props.contact.firstName} {props.contact.lastName}</Link>
  )
}

export default ContactList;