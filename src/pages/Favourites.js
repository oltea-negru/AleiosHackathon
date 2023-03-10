import React from 'react'
import ImageFood from '../assets/images/food.jpg'
import ImageTools from '../assets/images/tools.jpg'
import ImageClothes from '../assets/images/clothes.jpg'
import Product from '../components/Product'


function Favourites()
{
    const dummyProducts =
        [
            { id: 1, favourite: false, price: '10$', name: 'product1', category: 'food', image: ImageFood },
            { id: 2, favourite: false, price: 'FREE', name: 'product2', category: 'food', image: ImageFood },
            { id: 3, favourite: true, price: '10$', name: 'product3', category: 'food', image: ImageFood },
            { id: 4, favourite: true, price: 'FREE', name: 'product4', category: 'tools', image: ImageTools },
            { id: 5, favourite: false, price: '10$', name: 'product5', category: 'clothes', image: ImageClothes },
            { id: 6, favourite: false, price: 'FREE', name: 'product6', category: 'food', image: ImageFood }]
    return (
        <div className='mt-5 h-screen'>{dummyProducts.filter(product => product.favourite === true).map(product => <Product key={product.id} name={product.name} category={product.category} price={product.price} image={product.image} isFavourite={true}/>)}</div>
    )
}

export default Favourites