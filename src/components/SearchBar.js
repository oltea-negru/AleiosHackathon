import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

function SearchBar()
{
    return (<div className='min-w-[200px] max-w-[500px] w-[50%] flex flex-row'>
        <div className=' '>
            <input className='absolute h-10 rounded-lg  pl-4 pr-2 border-2 border-gray-300 focus:outline-none focus:border-green-600' type='text' placeholder='Search product' />
        </div>
        <SearchIcon />
    </div>
    )
}

export default SearchBar