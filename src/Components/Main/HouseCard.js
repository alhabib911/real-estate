import React from 'react';
import { BiArea, BiBath, BiBed } from 'react-icons/bi';
import { MdFavoriteBorder } from 'react-icons/md';
import { BsBuilding } from 'react-icons/bs';


const HouseCard = (props) => {
    const { _id, bath, bed, area, location, sqf, picture, price, title, property } = props.rent
    return (
        <div className='shadow-md pb-5 rounded-md bg-white'>
            <img className='w-full h-[220px] rounded-md' src={picture} alt="" />
            <div className='mx-5'>
                <div className='flex items-center justify-between py-3'>
                    <div className='flex items-end '>
                        <h2 className='text-2xl font-semibold text-purple-600'>${price}/</h2><small>month</small>
                    </div>
                    <div>
                        <h2 className='text-4xl hover:text-red-500 cursor-pointer text-sky-900'><MdFavoriteBorder /></h2>
                    </div>
                </div>
                <h2 className='text-2xl font-semibold text-sky-900 py-2'>{title}</h2>
                <div className='flex gap-2'>
                    <h4 className='text-gray-500 py-2'>{location},</h4>
                    <h4 className='text-gray-500 py-2'>{area}</h4>
                </div>
                <div className='flex items-center gap-2 text-sky-900 font-bold'>
                    <BsBuilding/>
                    <h4>Property Type: {property}</h4>
                </div>
                <div className='mx-5 py-2'>
                    <hr />
                </div>
                <div className='flex justify-between py-2'>
                    <div className='flex items-center gap-2 text-sky-900 hover:text-purple-600 font-semibold'>
                        <BiBed />
                        {bed} Beds
                    </div>
                    <div className='flex items-center gap-2 text-sky-900 hover:text-purple-600 font-semibold'>
                        <BiBath />
                        {bath} Baths
                    </div>
                    <div className='flex items-center gap-2 text-sky-900 hover:text-purple-600 font-semibold'>
                        <BiArea />
                        {sqf} Squ
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HouseCard;