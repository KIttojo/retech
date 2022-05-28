import React, { useState, useEffect } from 'react';
import {
  ProductContainer,
  ProductList,
  ImageContainer,
  ProductDescription,
  AddToCardBtn,
  ProductFooter,
  ContactWrapper,
  Email,
  Form
} from './CartComponents';
import {addOrder} from '../../api/firebase';

export const Products = ({items, removeItem}) => {
  return (
    <>
      {items.length > 0 ? (
        <ProductList>
          {items.map((item, id) => {
            return <React.Fragment key={`product-${id}`}>
              <Card item={item} removeItem={removeItem}/>
            </React.Fragment>
          })}
        </ProductList>
      ) :
        <div className="SectionTitle CenterText">Ваша корзина пуста</div>
      }
    </>
  );
}

export const Card = ({item, removeItem}) => {
  const {images, name, price, id} = item;
  return (
    <ProductContainer>
      <ImageContainer>
        <img 
          className="product-image"
          src={images[0] ? images[0] : "https://printmall.by/uploads/site/main/nophoto.jpeg"}
          alt='product'
        />
      </ImageContainer>
      <ProductDescription>
        {name}
      </ProductDescription>

      <ProductFooter>
        <AddToCardBtn onClick={() => removeItem(id)}>Удалить</AddToCardBtn>
        <p>{price}₽</p>
      </ProductFooter>
    </ProductContainer>
  );
}


export const BuyForm = ({products}) => {
  const [data, setData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });
  const [sum, setSum] = useState(0);

  const handleInput = (value, type) => {
    setData((prevValue) => {
      return {
        ...prevValue,
        [type]: value,
      }
    })
  }
  const calculateSum = () => {
    let res = 0;
    products.forEach(item => res = res + Number(item.price));
    setSum(res);
  }

  useEffect(() => {
    calculateSum();
  }, [products]);

  const pushOrder = () => {
    const items = products.map(i => {
      return {
        name: i.name,
        price: i.price,
        id: i.id,
      }
    });
    const order = {
      address: data.address,
      cost: sum,
      email: data.email,
      name: data.name || 'unknown',
      phone: data.phone,
      products: items,
      status: 'Новый',
    }
    addOrder(order);
  }

  return (
    <ContactWrapper id="contact">
      <div className="Container">
        <div className="SectionTitle">Оформите заказ</div>
        <div className="BigCard CardContact">
          <Email>
            <span>{`Товаров на сумму ${sum}р.`}</span>
          </Email>
          <Form onSubmit={() => pushOrder()}>
            <input
              onChange={(e) => handleInput(e.target.value, 'name')}
              className="FormField" 
              placeholder="Ваше имя" 
            />
            <input
              onChange={(e) => handleInput(e.target.value, 'phone')}
              className="FormField" 
              placeholder="Номер телефона" 
            />
            <input
              onChange={(e) => handleInput(e.target.value, 'email')}
              className="FormField" 
              placeholder="email" 
            />
            <input
              onChange={(e) => handleInput(e.target.value, 'address')}
              className="FormField" 
              placeholder="Адрес доставки" 
            />
            <input 
              className="btn PrimaryBtn sendForm" 
              type="submit" 
              value={'Оплатить'}
              onClick={() => pushOrder()}
            />
            
          </Form>
        </div>
      </div>
    </ContactWrapper>
  );
};