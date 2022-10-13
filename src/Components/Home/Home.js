import React from 'react';
import Main from '../Main/Main';
import Navbar from '../Navbar/Navbar';
import SearchBar from '../SearchBar/SearchBar';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <SearchBar/>
            <Main/>
        </div>
    );
};

export default Home;