import React, {useState} from "react";
// import {addDoc} from "../api/firebase";
import Orders from '../components/Admin/Orders';
import Requests from '../components/Admin/Requests';
import {HeaderAction} from '../components/Admin/Header';


const AdminPage = ({setIsSignedIn}) => {
  const [activeTab, setActiveTab] = useState('Заказы');

  return (
    <div>
      <HeaderAction 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
        setIsSignedIn={setIsSignedIn}
      />

      {activeTab === 'Заказы' ?
        <Orders /> : 
        <Requests />
      }
    </div>
  );
}

export default AdminPage;
