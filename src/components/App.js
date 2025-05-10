import { useState, useEffect } from 'react';
import Loading from './components/Loading';
import Tours from './components/Tours';
import './pakage.json'

const App = () => {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchTours = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('D:\react projects\Tours - React Application\tours-ManimehalaiAnandaraj\package-lock.json');
      const data = await response.json();
      setTours(data);
    } catch (error) {
      console.error('Error fetching tours:', error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const removeTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="app">
      <h1>Our Tours</h1>
      {tours.length === 0 ? (
        <div className="no-tours">
          <h2>No tours left</h2>
          <button className="refresh-btn" onClick={fetchTours}>
            Refresh
          </button>
        </div>
      ) : (
        <Tours tours={tours} removeTour={removeTour} />
      )}
    </div>
  );
};

export default App;