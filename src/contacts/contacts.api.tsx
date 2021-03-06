import axios from 'axios';
import { Contact } from './contact.model';

const api = 'http://localhost:5000/api';

export const getContacts = async (): Promise<Contact[]> => {
    const response = await axios.get(`${api}/contacts`);
    let contacts: Contact[] = response.data;
    return contacts;
};

export const getContact = async (id: number): Promise<Contact> => {
    const response = await axios.get(`${api}/contacts/${id}`);
    let contact: Contact = response.data;
    return contact;
}

export const updateContact = async (contact: Contact): Promise<void> => {
    await axios.post(`${api}/contacts/${contact.id}`, contact);
}