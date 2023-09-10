import React from 'react'
import '../Css/card.css'

export default function Card({Data , addtocart}) {
  return (
    <> 
    <div className="card m-2 rounded-4 cardbody border-danger  " style={{width: "18rem"}}>
      
    <img src={Data.image} className="card-img-top  " alt="item pic"/>
    <div className="card-body">
    <h5 className="card-title">{Data.title}</h5>
    <p className="card-text ">{Data.desc}</p>
    </div>
    <p className='fs-6 fw-bolder ms-3' >Rs {Data.price}</p>
   <button type="button" class="btn btn-danger" onClick={()=> addtocart(Data)} >Add To Cart</button> 
   </div>
   </>
  )
}
