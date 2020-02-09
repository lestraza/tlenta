import React from 'react';
import NavHome from '../HeaderFooter/NavHome';

function Header() {
    return (
        <div className='header'>
            <div className='header__container'>
                <div className="header__logo">
                    tlenta
                </div>
                <NavHome />
            </div>
            
        </div>
    )
}

export default Header;
