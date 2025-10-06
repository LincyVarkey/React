import React from 'react';

const RestaurantCard = ({ resItem }) => {
    const { name, costForTwo, cuisines, avgRating, cloudinaryImageId } = resItem;
    return (
        <div className='res-card'>
            <img className="res-logo" alt={name} src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} />
            <div className='res-car-details'>
                <h3>{name}</h3>
                <h4>{cuisines.join(", ")}</h4>
                <h4>{avgRating} Star Rating</h4>
                <h4>{costForTwo}</h4>
            </div>
        </div>
    )
};

export default RestaurantCard;