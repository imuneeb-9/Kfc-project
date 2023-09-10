import React from 'react'
import Card from './Card'


export default function products({ addtocart , Data }) {
  return (
    <>
      <div className='row row-column-1 row-column-md-4  cardmargin'>
      { Data.map(Data => <Card key={Data.id} Data={Data} addtocart={addtocart} />)}
      </div>
    </>
  )
}
