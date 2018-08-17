import React from 'react';
import { TennowareContext } from './context';

export const withContext = Component => {
    return props => {
        return (
            <TennowareContext.Consumer>
                {context => {
                    return <Component {...props} context={context} />
                }}
            </TennowareContext.Consumer>
        )
    }
}