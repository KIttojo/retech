import React, { useState, useEffect } from 'react';
import Autocomplete from 'react-autocomplete';
import {
  ProductContainer,
  ProductList,
  ImageContainer,
  ProductDescription,
  AddToCardBtn,
  ProductFooter,
  Modal,
  ModalHeader,
  ModalFooter
} from './ShopComponents';
import Expand from 'react-expand-animated';
import SimpleImageSlider from 'react-simple-image-slider';
import {ReactComponent as CloseIcon} from '../../Assets/closeIcon.svg';

import { getProducts } from '../../api/firebase';
import {useWindowDimensions} from '../../hooks';

export const SelectCity = ({city, setCity}) => {
  const styles = {
    borderRadius: '3px',
    boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
    background: 'rgba(255, 255, 255, 0.9)',
    padding: '2px 0',
    fontSize: '30%',
    position: 'fixed',
    overflow: 'auto',
    maxHeight: '30%',
  }

  return (
    <div className="BigCard pick-city">
      <h2 className="close-cities">Выберите ваш город:</h2>
      <Autocomplete
        menuStyl={styles}
        getItemValue={(item) => item.label}
        items={[
          { label: 'Москва' },
          { label: 'Санкт-Петербург' },
          { label: 'Новосибирск' },
          { label: 'Ростов-на-Дону' },
          { label: 'Таганрог' }
        ]}
        renderItem={(item, isHighlighted) =>
          <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
            {item.label}
          </div>
        }
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onSelect={(val) => setCity(val)}
      />
    </div>
  );
}

export const Products = ({selectedCity}) => {
  const [products, setProducts] = useState([]);
  const [hasProducts, setHasProducts] = useState(0);

  useEffect(() => {
    getProducts()
    .then(data => {
      setProducts(data);
      let hasItems = false;
      data.forEach((item) => {
        if (item.city === selectedCity) hasItems = true;
      });
      setHasProducts(hasItems);
    });
  }, [selectedCity]);

  return (
    <>
      {hasProducts ? (
        <ProductList>
          {products.map((item, id) => {
            return <React.Fragment key={`product-${id}`}>
              <Card item={item} selectedCity={selectedCity}/>
            </React.Fragment>
          })}
        </ProductList>
      ) :
        <div className="SectionTitle CenterText">В городе {selectedCity} ничего не найдено :(</div>
      }
    </>
  );
}

export const Card = ({item, selectedCity}) => {
  const {city, description, images, name, price, inStock} = item;
  const [showingDescription, setShowingDescription] = useState(false);
  const [showingPics, setShowingPics] = useState(false);
  const { modalHeight, modalWidth } = useWindowDimensions();

  const toggleState = () => {
    setShowingDescription(!showingDescription);
  }

  return (
    <>
      {(inStock && city === selectedCity) && (
        <ProductContainer>
          {showingPics && (
            <Modal>
              <ModalHeader>
                <CloseIcon 
                  onClick={() => setShowingPics(false)}
                  style={{cursor: 'pointer', marginRight: '25px'}}
                  />
              </ModalHeader>
              <SimpleImageSlider
                width={modalWidth}
                height={modalHeight}
                images={images}
                showBullets={true}
                showNavs={true}
              />
              <ModalFooter />
            </Modal>)
          }
          <ImageContainer>
            <img 
              className="product-image"
              onClick={() => setShowingPics(true)}
              src={images[0] ? images[0] : "https://printmall.by/uploads/site/main/nophoto.jpeg"}
              alt='product'
            />
          </ImageContainer>
          <ProductDescription>
            {name}
          </ProductDescription>
  
          <p 
            style={{cursor: 'pointer', fontWeight: '700', marginBottom: '10px'}} 
            onClick={toggleState}>{showingDescription ? "Скрыть описание" : "Показать описание"}
          </p>
          <Expand open={showingDescription}>
            <div style={{ width: '300px', height: '100%' }}>{description}</div>
          </Expand>
  
          <ProductFooter>
            <AddToCardBtn>В корзину</AddToCardBtn>
            <p>{price}₽</p>
          </ProductFooter>
        </ProductContainer>
      )}
    </>
  );
}