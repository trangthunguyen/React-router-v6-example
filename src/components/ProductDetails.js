import React from 'react'
import { useParams } from 'react-router-dom'
import shoes from './../shoes.json'
import NotFound from './NotFound';

function ProductDetails(props) {
    const { id } = useParams();
    const shoe = shoes[id]

if(!shoe){
    return <NotFound />
}

    return (
        <div className="container">
            <h2>Product Details: {shoe.name}</h2>
            <img src={shoe.img} width='320' height='320' alt={id} />
            <p>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, laudantium debitis unde porro expedita necessitatibus corrupti tenetur distinctio, sint quaerat eligendi. Cumque quis nisi, voluptatibus earum facilis esse consequuntur magnam!</p>
        </div>
    )
}

export default ProductDetails
