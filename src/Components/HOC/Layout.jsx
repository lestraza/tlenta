import React from 'react';
import Header from '../HeaderFooter/Header';

function Layout(props) {
    return (
        <div>
            <Header />
            {props.children}
            <div className='clearfix'></div>
        </div>
    )
}

export default Layout
