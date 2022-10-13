import React from 'react';

const HouseCard = (props) => {
    const {_id, bath, bed, garadge, location, model, picture, price, title, property} =props.house
    return (
        <div>
            <img src={picture} alt="" />
            ID: {_id} <br />
            Location: {location} <br />
            Price: {price} <br />
            Property Type: {property}
        </div>
    );
};

export default HouseCard;