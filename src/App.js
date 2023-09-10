import React, { useState } from 'react'
import Menu from "./Pages/Menu";
import Header from './Components/Header'
import Offcanvas from './Components/Offcanvas';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [ cartitems , Setcartitems ] = useState([]);  
 
  const removeItem = (DataId) => {
   const updatecart = cartitems.filter( i => i.id !==  DataId )
   Setcartitems(updatecart);
   };

  const addtocart = (item) => {
      Setcartitems([...cartitems,item]);
      toast.dark("Item Added Successfully");

}

  return (
    <>
    <ToastContainer position="Top-left" />
    <Header cartcounter={cartitems.length} />
    <Offcanvas cartitems={cartitems} removeItem={removeItem} />
    <Menu addtocart={addtocart} />
    </>
  );
}

export default App;
