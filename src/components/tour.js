import { useState } from 'react';

const Tour = ({ tour, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  const { id, image, name, price, info } = tour;

  return (
    <article className="tour">
      <img src={image} alt={name} />
      <div className="tour-info">
        <div className="tour-header">
          <h3>{name}</h3>
          <p className="tour-price">${price}</p>
        </div>
        <p className="tour-description">
          {readMore ? info : `${info.substring(0, 200)}...`}
          {info.length > 200 && (
            <button onClick={() => setReadMore(!readMore)}>
              {readMore ? 'See less' : 'Show more'}
            </button>
          )}
        </p>
        <button className="remove-btn" onClick={() => removeTour(id)}>
          Remove
        </button>
      </div>
    </article>
  );
};

export default Tour;
