import React, { useState }  from 'react'
import '../Css/offcanvas.css'
import Emptycart from './img/emptycart.png'


export default function Offcanvas( {cartitems , removeItem} ) {

  const [itemQuantities, setItemQuantities] = useState({});
  

  const increment = (itemId) => {
    setItemQuantities((prevQuantities) => ({...prevQuantities,[itemId]: (prevQuantities[itemId] || 1) + 1,}));

  };

  const decrement = (itemId) => {
    setItemQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: Math.max((prevQuantities[itemId] || 0) - 1, 0),
    }));
  };

  //remoceitem
 const RemoveItems = (DataId) => {
  removeItem(DataId);
 };
 
const Totalprice = () => {
 let total = 0;
 cartitems.forEach( (item) => { 
  const quantity = itemQuantities[item.id] || 0 ;
  total += item.price *  quantity;
});
return total;
};

//const [ Quan , SetQuan ] = useState([]);
//const increment = (itemId) =>{
//const updatedCart = cartitems.map( c => 
//c.id === itemId ? {...c, quantity: c.quantity + 1 } : c
//);
//SetQuan(updatedCart)
//}; 

//const [items , SetItems ] = useState([...cartitems]);

//const increment = (Productid) => {
//   const updatedcart = items.map( i => {
//    if (i.id === Productid) {
//      return{...i, quantity: i.quantity + 1};
//    }
//    return items;
//   }) 
//   SetItems(updatedcart);
//};

 
return (
    <>

   <div class="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header" id='offcanvasRightLabel'>
   
    <div className='title-border'>
    <h4 class="offcanvas-title" id="offcanvasRightLabel">Cart items</h4>
    </div>
    
  <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
   {
      cartitems.length ? (
        cartitems.map(c =>
           <>
         <div className='mainbodycan-v'>
         <img className='ofcanvimg' src={c.image} alt="item img" />
         <p className='ofcavtitle' >{c.title}</p>
         
        <span className='btnpos'>
          <button className='btninc' onClick={()=>increment(c.id)} >+</button>
          <span className='val'>{itemQuantities[c.id] || 1}</span>
         <button className='btndec' onClick={()=>decrement(c.id)} >-</button>
        </span>
      
       <span>
         <button className='removeitem' onClick={()=>RemoveItems(c.id)} >x</button>
       </span>
         <p className='pricectg'>Rs: {c.price}</p>
          </div>
          <br />
          </>)
      ) : (
      <h5><p className='emptycarttext'>Cart is Empty...</p> 
      <img className='emptycart' src={Emptycart} alt="Cart is Empty" />
      </h5>)
    }   
   <p className='totalprice'>Total Price = {Totalprice()}</p>
   </div>
   </div>
  
  
    </>
  )
}
