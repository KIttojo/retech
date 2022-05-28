import React, {useState} from "react";
// import {addDoc} from "../api/firebase";
import Orders from '../components/Admin/Orders';
import {HeaderAction} from '../components/Admin/Header';


const AdminPage = () => {
  const [activeTab, setActiveTab] = useState('Заказы');

  return (
    <div>
      <HeaderAction activeTab={activeTab} setActiveTab={setActiveTab}/>

      {activeTab === 'Заказы' ?
        <Orders /> : 
        <div>sdfsdf</div>
      }
    </div>
  );
}

export default AdminPage;
