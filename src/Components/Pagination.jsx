import React from 'react'
import '../Css/pagination.css'

export default function Pagination({page1 , page2 , page3 }) {
  return (
    <>
      
  <ul className="pagination justify-content-center my-5">
 <button className="pagination-btns" onClick={page1} href="#">1</button>
 <button className="pagination-btns" onClick={page2} href="#"  >2</button>
 <button className="pagination-btns" onClick={page3} href="#">3</button>
  </ul>

    </>
  )
}
