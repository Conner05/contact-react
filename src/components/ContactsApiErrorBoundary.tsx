import React from 'react';
import ErrorBoundary from './ErrorBoundary';

export default class ContactsApiErrorBoundary extends ErrorBoundary {
    constructor(props: any) {
        super(props);
    }

    render() {
        if (this.state.hasError) {
            return <h1>Couldn't talk to Contacts API</h1>;
        }
        return this.props.children;
    }
}