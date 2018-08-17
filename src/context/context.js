import React, { Component } from 'react';

export const TennoContext = React.createContext();

export class TennoProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'News',
            viewWidth: window.innerWidth
        }
    }

    render() {
        return (
            <TennoContext.Provider value={{ ...this.state }}>
                {this.props.children}
            </TennoContext.Provider>
        )
    }
}