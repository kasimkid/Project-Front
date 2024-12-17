import React from 'react'



const Card = ({ data }) => {
    const {name, img,id } = data
  return (

    <>
        <div>
           <h4>{name}</h4> 
        </div>
    </>
 
  )
}

export default Card
