import React from 'react'
import ImageFood from '../assets/images/food.jpg'
import ImageTools from '../assets/images/tools.jpg'
import ImageClothes from '../assets/images/clothes.jpg'
import Product from '../components/Product'


function Tools()
{
    const dummyProducts = [
        {
            id: 1,
            favourite: false,
            price: "10$",
            name: "product1",
            category: "food",
            image: ImageFood,
        },
        {
            id: 2,
            favourite: false,
            price: "FREE",
            name: "product2",
            category: "food",
            image: ImageFood,
        },
        {
            id: 3,
            favourite: false,
            price: "10$",
            name: "product3",
            category: "food",
            image: ImageFood,
        },
        {
            id: 4,
            favourite: false,
            price: "FREE",
            name: "product4",
            category: "tools",
            image: ImageTools,
        },
        {
            id: 5,
            favourite: false,
            price: "10$",
            name: "product5",
            category: "clothes",
            image: ImageClothes,
        },
        {
            id: 6,
            favourite: false,
            price: "FREE",
            name: "product6",
            category: "food",
            image: ImageFood,
        },
        {
            id: 7,
            favourite: false,
            price: "10$",
            name: "product7",
            category: "clothes",
            image: ImageClothes,
        },
        {
            id: 8,
            favourite: false,
            price: "FREE",
            name: "product8",
            category: "tools",
            image: ImageTools,
        },
        {
            id: 9,
            favourite: false,
            price: "10$",
            name: "product9",
            category: "clothes",
            image: ImageClothes,
        },

    ];
    return (
        <div className='mt-5 h-screen'>{dummyProducts.filter(product => product.category === 'tools').map(product => <Product key={product.id} name={product.name} category={product.category} price={product.price} image={product.image} />)}</div>
    )
}

export default Tools