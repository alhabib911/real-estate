import React from 'react';
import { RiHome6Fill } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='flex items-center justify-between pt-5 mx-10'>
            <div className='flex items-center gap-16'>
                <div className='flex items-center'>
                    <span className='text-purple-700 text-3xl'><RiHome6Fill /></span>
                    <h2 className='text-sky-900 text-2xl font-bold'>Estatery</h2>
                </div>
                <div>
                    <ul className='flex gap-4 text-lg font-semibold'>
                        <li>Rent</li>
                        <li>Buy</li>
                        <li>Sell</li>
                        <li className='flex items-center'>Manage Property <MdKeyboardArrowDown /></li>
                        <li className='flex items-center'>Resources <MdKeyboardArrowDown /></li>
                    </ul>
                </div>
            </div>
            <div className='flex gap-3'>
                <Link className='border rounded-md px-6 py-2 hover:bg-purple-600 hover:text-white font-semibold text-purple-600' to="/">Login</Link>
                <Link className='border rounded-md px-6 py-2 bg-purple-600 text-white hover:bg-white hover:text-purple-600 font-semibold' to="/">Signup</Link>
            </div>
        </nav>
    );
};

export default Navbar;