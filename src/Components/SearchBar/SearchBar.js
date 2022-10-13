import React, { useEffect, useState } from 'react';

const SearchBar = () => {
    const [rentHouse, setRentHouse] = useState([])
    useEffect(() => {
        fetch(process.env.PUBLIC_URL + "/house.json")
            .then(res => res.json())
            .then(data => setRentHouse(data))
    }, [rentHouse])
    return (
        <div className='mx-20 mt-10'>
            <h1 className='text-4xl font-bold'>Search Property to rent</h1>
            <div className='flex'>
                <div>
                    <select
                        required
                        name=""
                        id=""
                        className="py-1 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none"
                    >
                        <option selected disabled>
                            Select Location
                        </option>
                        {rentHouse.map((location) => (
                            <option
                                key={location._id}
                                value={location.location}
                            >
                                {location.location}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <select
                        name=""
                        id=""
                        className="py-1 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none"
                    >
                        <option value="Property Type" selected disabled>Property Type</option>
                        <option value="Room">Room</option>
                        <option value="Building">Building</option>
                        <option value="Office">Office</option>
                    </select>
                </div>
                <div>
                    <select
                        required
                        name=""
                        id=""
                        className="py-1 pl-3 w-full my-1 border border-gray-300 bg-slate-50 rounded outline-none"
                    >
                        <option selected disabled>
                            Select Price
                        </option>
                        {rentHouse.map((price) => (
                            <option
                                key={price._id}
                                value={price.price}
                            >
                                {price.price}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <button>search</button>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;