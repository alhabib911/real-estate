import React, { useEffect, useState } from 'react';
import HouseCard from './HouseCard';

const Main = () => {
    const [rentHouse, setRentHouse] = useState([])
    useEffect(() => {
        fetch(process.env.PUBLIC_URL + "/house.json")
            .then(res => res.json())
            .then(data => setRentHouse(data))
    }, [rentHouse])

    // console.log(rentHouse);
    return (
        <div className='grid grid-cols-4 gap-8 mx-10'>
            {
                rentHouse.slice(0, 6).map(house => <HouseCard
                    house={house}
                ></HouseCard>
                )
            }
        </div>
    );
};

export default Main;