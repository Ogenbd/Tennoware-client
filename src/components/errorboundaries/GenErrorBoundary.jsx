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

    componentDidCatch(error, info) {
        console.log(error, info);
      }

    render() {
        if (this.state.hasError) {
            return <div style={{width: '100vw', minHeight: '100vh', backgroundColor: 'rgb(40, 44, 52)'}}><TheVoid /></div>;
        }

        return this.props.children;
    }
}