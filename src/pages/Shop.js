import { useState } from 'react';
import Login from './Login';
import { SelectCity, Products } from '../components/Shop/Shop';
import About from "../components/About/About";
import Header from '../components/Header/Header';
import Dropdown from "../components/Dropdown/Dropdown";

const Shop = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [city, setCity] = useState('Москва');
  const [card, setCard] = useState(JSON.parse(localStorage.getItem('card')) || []);
  console.log('card=', card)
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const addToCard = (id) => {
    setCard(prev => {
      if (!prev.includes(id)) {
        const newData = [...prev, id];
        localStorage.setItem('card', JSON.stringify(newData));
        return newData;
      }
      return prev;
    })
  }

  console.log(card)

  return (
    <div className="Container">
      <Header toggle={toggle} card={card} setCard={setCard}/>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      {/* <Login /> */}
      <SelectCity city={city} setCity={setCity}/>
      <Products selectedCity={city} addToCard={addToCard}/>
      {/* <About /> */}
    </div>
    );
}

export default Shop;