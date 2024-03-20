
import React from 'react';
import Brand from './Brand';

function Layout({ children }) {
    return (
        <div className="layout">
            <Brand />
            <div className="content">
                {children}
            </div>
        </div>
    );
}

export default Layout;
