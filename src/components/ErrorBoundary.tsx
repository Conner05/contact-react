import React from 'react';

export default class ErrorBoundary extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = { hasError: false };
    }
    static getDerivedStateFromError(error: Error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }
    componentDidCatch(error: Error, info: object) {
        console.log('did catch')
        // You can also log the error to an error reporting service
        // logErrorToMyService(error, info);
    }
    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <h1>SOMETHING HORRIBLE HAS HAPPENED!</h1>;
        }
        return this.props.children;
    }
};