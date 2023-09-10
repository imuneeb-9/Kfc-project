import React from 'react'
import categories from '../Data/Category.json'
import '../Css/catg.css'


export default function Category({ onselectcat , selectcatid }) {
  return (
    <>
    {
     categories.map( cat => { return(
      <div className='mainbutton  '> 
      <button  
      type="button" 
      className={`catgbutton   ${cat.id === selectcatid? 'onclick' :'catgbutton'}`} 
      key={cat.id}  
      onClick={()=>onselectcat(cat.id)}
      >
     {cat.title}
      </button> 
      </div>
     )})}
    </>
  )
}
