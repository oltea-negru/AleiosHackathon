import React from 'react'
import { useNavigate } from 'react-router-dom'

function Category(props)
{
    const navigate = useNavigate()

    return (
        <div onClick={() => navigate('/categories' + props.path)} className='h-72 w-[80%] rounded-sm inline-block mr-10 mt-10 hover:scale-110 transform duration-300 ease-in-out hover:cursor-pointer'>
            <img className='w-full h-full object-cover rounded-md' alt={props.name} src={props.image} />

            <div className='w-full absolute bottom-0 flex justify-center'>
                <h2 className='bg-white text-2xl py-3 px-7 rounded-t-md border-black border-2 border-b-0'>
                    {props.name}
                </h2>
            </div>
        </div >
    )
}

export default Category