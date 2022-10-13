import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import SearchBar from '../SearchBar/SearchBar';

const Home = () => {
    return (
        <div className='bg-[#F8F7FD]'>
            <Navbar/>
            <SearchBar/>
            <Footer/>
        </div>
    );
};

export default Home;