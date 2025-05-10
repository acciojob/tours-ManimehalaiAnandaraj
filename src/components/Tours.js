import Tour from './components/Tour';

const Tours = ({ tours, removeTour }) => {
  return (
    <div className="tours">
      {tours.map((tour) => (
        <Tour key={tour.id} tour={tour} removeTour={removeTour} />
      ))}
    </div>
  );
};

export default Tours;