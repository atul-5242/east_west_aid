import React, { useEffect, useState } from 'react'
import './Popular.css'
import Item from '../Items/Item'

const Popular = () => {

  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    fetch('https://east-west-aid.onrender.com/appliances')
        .then((response) => response.json())
        .then((data) => {
            setPopularProducts(data);
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
}, []);

  return (
    <div className='popular'>
      <h1>APPLIANCES - Home essential hub!</h1>
      <hr />
      <div className="popular-item">
        {popularProducts.map((item, i)=>{
            return <Item 
            key={i} 
            id={item.id} 
            name={item.name}
            image={item.image} 
            new_price={item.new_price}
            old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default Popular
