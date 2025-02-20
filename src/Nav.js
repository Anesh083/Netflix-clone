import React, { useEffect, useState } from 'react';
import './Nav.css';

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                handleShow(true);
            } else {
                handleShow(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`nav ${show && 'nav_black'}`}>
            <img
                className='nav_logo'
                src='netflix logo.png'
                alt='Netflix Logo'
            />

            <img
                className='nav_avatar'
                src='th.jpg'
                alt='Netflix Logo'
            />
        </div>
    );
}

export default Nav