import React, { useState } from 'react';

const Tour = ({ tour, removeTour }) => {
    const [showMore, setShowMore] = useState(false);

    return (
        <div style={{
            border: "1px solid gray",
            width: "300px",
            padding: "10px",
        }}>
            <img src={tour.image} width={'100%'} height={'200px'} alt={tour.name} />
            <p>{tour.name}</p>
            <p>Price: ${tour.price}</p>

            <p id={`tour-item-para-${tour.id}`}>
                {showMore ? tour.info : tour.info.substring(0, 200)}
                <button 
                    id={`see-more-${tour.id}`} 
                    onClick={() => setShowMore(!showMore)} 
                    style={{ border: "none", background: "none", color: "blue", cursor: 'pointer' }}>
                    {showMore ? "See less" : "Show More"}
                </button>
            </p>
            <button 
                onClick={() => removeTour(tour.id)}
                id={`delete-btn-${tour.id}`}
                style={{
                    width: "100%",
                    height: "30px",
                    background: "red",
                    color: "white",
                    border: "none",
                    cursor: 'pointer',
                    borderRadius: "10px",
                }}>
                Remove
            </button>
        </div>
    );
}

export default Tour;