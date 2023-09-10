import { useState } from 'react'
import Products from '../Components/Products'
import Pagination from '../Components/Pagination'
import Category from '../Components/Category'
import Data  from '../Data/Products.json'




export default function Menu({addtocart}) {

  const [selectcatid,Setselectcatid] = useState(null);
  const [products , Setproducts ] = useState(Data.filter(d=> d.id <= 12));
  
  
  // For Catgories buttons

  const onselectcat = (catId) => {
   console.log(catId);
   Setselectcatid(catId);
   
   const filtercatg = Data.filter(d => d.allID === catId ? d  :
   d.categoryId === catId ) 
   
   Setproducts(filtercatg);
  };

  
  // For Pagination
  
  const page1 = () => {
    Setproducts(Data.filter(d=> d.id <= 12 ))
  };
  
  const page2 = () => {
    Setproducts(Data.filter(p => p.id >=13 && p.id <=35 ));
  };   
  
  const page3 = () => {
    Setproducts(Data.filter(p=> p.id >=36 && p.id <=59 ))
  };
  
 
   
 
 return (
    <>
      <Category onselectcat={onselectcat} selectcatid={selectcatid} />
      <Products addtocart={addtocart} Data={products} />
      <Pagination page1={page1} page2={page2} page3={page3} />
    </>
  )
}
