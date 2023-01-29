import './App.css';
import { data } from './data';
import { useState } from 'react';

function App() {
  const [hotels, setHotels] = useState(data);
  const [showText, setShowText] = useState(false);

  const removeItem = (id) => {
    let newHotels = hotels.filter((item) => item.id !== id);
    setHotels(newHotels);  
  }

  const showTextClick = (item) => {
    item.showMore = !item.showMore;
    setShowText(!showText);
  }

  return (
    <div>
      <div className='container'>
        <h1>NY top {hotels.length} hotels</h1>
      </div>

      <div>
        {hotels.map((item => {
          const { id, hotelName, description, image, source, showMore } = item;
          
          return (
            <div key={id}>
              <div className='container'>
                <h2>{id} - {hotelName}</h2>
              </div>

              <div className='container'>
                <p>{showMore ? description : description.substring(0, 230) + '...'}
                <button onClick={() => showTextClick(item)}>{showMore ? 'Show less' : 'Show more'}</button>
                </p>
              </div>

              <div className='container'>
                <img src={image} width='500px' alt='hotel'/>
              </div>

              <div className='container'>
              <p>Source: {source}</p>
              </div>

              <div className='container'>
                <button className='btn' onClick={() => removeItem(id)}>remove</button>
              </div>
            </div>
          )
        }))}

        <div className='container'>
          <button className='btn' onClick={() => setHotels([])}>delete all</button>
        </div>
      </div>
    </div>
  );
}

export default App;
