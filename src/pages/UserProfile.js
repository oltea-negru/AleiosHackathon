import React from 'react'
import Placeholder from '../assets/images/placeholder2.png'
import ImageFood from '../assets/images/food.jpg'
import ImageTools from '../assets/images/tools.jpg'
import ImageClothes from '../assets/images/clothes.jpg'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Product from '../components/Product'


// the profile page you made still exists, dont cry
function UserProfile()
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
    ];

    const [name, setName] = useState('John Doe')
    const [wallet, setWallet] = useState('0$')
    const [numberOfProducts, setNumberOfProducts] = useState(dummyProducts.length)

    return (
        <div className='h-screen flex flex-col mt-5'>
            <div className='flex flex-row'>
                <img id='myimage' className='rounded-md h-56 mb-5' src={Placeholder} alt='profile' />

                <div className='flex flex-col ml-5'>
                    <div className='flex flex-row'>
                        <h1 className='text-2xl font-bold'>Name:</h1>
                        <h1 className='text-2xl font-bold ml-5'>{name}</h1>
                    </div>
                    <div className='flex flex-row'>
                        <h1 className='text-2xl font-bold'>Money:</h1>
                        <h1 className='text-2xl font-bold ml-5'>{wallet}</h1>
                    </div>
                    <div className='flex flex-row'>
                        <h1 className='text-2xl font-bold'>Number of products:</h1>
                        <h1 className='text-2xl font-bold ml-5'>{numberOfProducts}</h1>
                    </div>
                    {/* can add some other fields */}

                </div></div>
            <div className='flex flex-col'>
                <h1 className='text-2xl font-bold'>Your Items:</h1>
                <div className=''>
                    {dummyProducts.map((product) =>
                    {
                        return <div className='inline-block w-56 mx-3 my-3'>
                            <img className='rounded-md h-56' src={product.image} alt='product' />
                            <div className='flex flex-col'>
                                <p>
                                    Name: {product.name}
                                </p>
                                <p>
                                    Category: {product.category}
                                </p>
                                <p>
                                    Price: {product.price}
                                </p>
                            </div>
                        </div>
                    })}
                </div>
            </div >
        </div >
    )
}

export default UserProfile