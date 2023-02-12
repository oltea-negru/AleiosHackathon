import Category from '../components/Category'
import React from 'react'
import Clothes from '../assets/images/clothes.jpg'
import Food from '../assets/images/food.jpg'
import Tools from '../assets/images/tools.jpg'

function Categories()
{
    const categories = [{
        id: 1,
        name: 'Clothes',
        path: '/clothes',
        image: Clothes
    },
    {
        id: 2,
        name: 'Food',
        path: '/food',
        image: Food
    }
        ,
    {
        id: 3,
        name: 'Tools',
        path: '/tools',
        image: Tools
    },

    ]

    return (
        <div className='h-screen grid place-items-center'>{categories.map(e => <Category key={e.id} name={e.name} image={e.image} path={e.path} />)}</div>
    )
}

export default Categories