import React from 'react';


function NavHome(props) {

    const buttonNames = ['россия', 'мир', 'экономика', 'наука и техника', 'культура'];
    const showButtons = () => {
        return buttonNames.reverse().map((button, key) => {
           return (
              
                   <a className='header__nav' key={key} to={`/${button}`}>
                       {button.toUpperCase()}
                   </a>
           
           )
       })
   }
    return (
        <div className='header__nav'>
            {showButtons()}
        </div>
    )
}

export default NavHome
