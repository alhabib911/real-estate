import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className='py-10 text-center'>
                <p>Copyright © {new Date().getFullYear()} <span className='font-bold text-purple-600'>Estatery Co.</span> All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;