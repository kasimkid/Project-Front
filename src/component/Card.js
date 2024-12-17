import React from 'react'



const Card = ({ data }) => {
    const {name, img,id } = data
  return (

    <>
        <div>
           <h4>{name}</h4> 
           <h3>Crear Personaje</h3>
        </div>
    </>
 
  )
}

export default Card
