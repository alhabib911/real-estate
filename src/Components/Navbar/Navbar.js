import React from 'react';
import { RiHome6Fill } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='py-5 shadow-sm'>
            <div className='flex items-center justify-between mx-10'>
            <div className='flex items-center gap-16'>
                <div className='flex items-center'>
                    <Link to='/' className='text-purple-700 text-3xl'><RiHome6Fill /></Link>
                    <Link to='/' className='text-sky-900 text-2xl font-bold'>Estatery</Link>
                </div>
                <div>
                    <ul className='flex gap-4 text-lg font-semibold'>
                        <Link to='/rent'>Rent</Link>
                        <Link to='/rent'>Buy</Link>
                        <Link to='/rent'>Sell</Link>
                        <Link className='flex items-center' to='/rent'>Manage Property <MdKeyboardArrowDown /></Link>
                        <Link className='flex items-center' to='/rent'>Resources <MdKeyboardArrowDown /></Link>
                    </ul>
                </div>
            </div>
            <div className='flex gap-3'>
                <Link className='border rounded-md px-6 py-2 hover:bg-purple-600 hover:text-white font-semibold text-purple-600' to="/">Login</Link>
                <Link className='border rounded-md px-6 py-2 bg-purple-600 text-white hover:bg-white hover:text-purple-600 font-semibold' to="/">Signup</Link>
            </div>
        </div>
        </nav>
    );
};

export default Navbar;