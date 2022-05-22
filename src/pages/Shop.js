import { useState } from 'react';
import Login from './Login';
import { SelectCity, Products } from '../components/Shop/Shop';
import About from "../components/About/About";
import Header from '../components/Header/Header';
import Dropdown from "../components/Dropdown/Dropdown";

const Shop = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [city, setCity] = useState('Москва');

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="Container">
      <Header toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      {/* <Login /> */}
      <SelectCity city={city} setCity={setCity}/>
      <Products selectedCity={city}/>
      <About />
    </div>
    );
}

export default Shop;