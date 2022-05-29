import React from "react";
import { ContactWrapper, Email, Form } from "./ContactElements";
import { useState } from "react";
import {addRequest} from "../../api/firebase";

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    category: "",
    description: "",
    address: "",
    phone: "",
    status: "Новое"
  });

  const handleInput = (value, type) => {
    setData((prevValue) => {
      return {
        ...prevValue,
        [type]: value,
      }
    })
  }

  const pusData = () => {
    addRequest(data);
  }

  return (
    <ContactWrapper id="contact">
      <div className="Container">
        <div className="SectionTitle">Сдать технику</div>
        <div className="BigCard CardContact">
          <Email>
            <span>Опишите товар, а мы его заберем</span>
          </Email>
          <Form onSubmit={() => console.log(1)}>
            <input
              onChange={(e) => handleInput(e.target.value, 'name')}
              className="FormField" 
              placeholder="Ваше имя" 
            />
            <input
              onChange={(e) => handleInput(e.target.value, 'address')}
              className="FormField" 
              placeholder="Ваш адрес" 
            />
            <input
              onChange={(e) => handleInput(e.target.value, 'phone')}
              className="FormField" 
              placeholder="Телефон"
            />
            <select className="FormField" onChange={(e) => handleInput(e.target.value, 'category')}>
              <option value="" disabled>Категория товара</option>
              <option value="A">Стиральная машина</option>
              <option value="B">Холодильник</option>
              <option value="C">Кофемашина</option>
              <option value="D">Морозильная камера</option>
              <option value="E">Посудомойка</option>
              <option value="F">Сушилка</option>
              <option value="G">Ноутбук</option>
              <option value="H">Смартфон</option>
              <option value="I">Телевизор</option>
              <option value="J">Смартфон</option>
              <option value="K">Электроплита</option>
              <option value="L">Игровая приставка</option>
              <option value="Other">Другое</option>
            </select>
            <textarea 
              onChange={(e) => handleInput(e.target.value, 'description')}
              className="FormField TextArea" 
              placeholder="О товаре" 
            />
            {/* <input 
              // onChange={(e) => handleInput(e.target.value, 'images')}
              onChange={(e) => console.log(e.target.files)}
              type="file" 
              id="file" 
              name="file" 
              multiple 
            /> */}

            <input 
              className="btn PrimaryBtn sendForm" 
              type="submit" 
              onClick={() => pusData()}
            />
            
          </Form>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default Contact;
