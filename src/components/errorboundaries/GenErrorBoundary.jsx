import React, { Component } from 'react';

import TheVoid from '../thevoid/TheVoid';

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return <TheVoid />;
        }

        return this.props.children;
    }
}