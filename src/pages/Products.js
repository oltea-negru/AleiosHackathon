'use client'

import { useEffect, useState } from 'react'
import { client, exploreProfiles, getProducts } from '../api/api'
import Link from 'next/link'
import Product from '../components/Product'
import ImageClothes from '../assets/images/clothes.jpg'
import ImageFood from '../assets/images/food.jpg'
import ImageTools from '../assets/images/tools.jpg'

import { gql } from '@apollo/client'
import { USER } from '../api/api'


export default function Home()
{

    const [profiles, setProfiles] = useState([])

    const dummyProducts =
        [
            { id: 1, favourite: false, price: '10$', name: 'product1', category: 'food', image: ImageFood },
            { id: 2, favourite: false, price: 'FREE', name: 'product2', category: 'food', image: ImageFood },
            { id: 3, favourite: false, price: '10$', name: 'product3', category: 'food', image: ImageFood },
            { id: 4, favourite: false, price: 'FREE', name: 'product4', category: 'tools', image: ImageTools },
            { id: 5, favourite: false, price: '10$', name: 'product5', category: 'clothes', image: ImageClothes },
            { id: 6, favourite: false, price: 'FREE', name: 'product6', category: 'food', image: ImageFood }]

    useEffect(() =>
    {
        fetchProfiles()
    }, [])

    async function fetchProfiles()
    {
        try
        {

            //   /* fetch profiles from Lens API */
            let response = await client.query({ query: exploreProfiles }).then(user =>
            {
                let profileData = [];
                user.data.exploreProfiles.items.map(async profileInfo =>
                {
                    let idd = profileInfo.id;

                    let products = await client.query({
                        query: getProducts,
                        variables: {
                            request: {
                                ownerAddress: idd,
                                limit: 10,
                                chainIds: [1]
                            }
                        }
                    }
                    ).then(user =>
                    {
                    });
                    // const products = client.mutate({
                    //   mutation: gql(getProducts),
                    //   variables: {
                    //     address: {
                    //         idd
                    //     },
                    //   }
                    // }).then( product => {
                    //   console.log(">>>>",product);
                    // })
                    // return result.data.nfts;
                    // }
                    // console.log(getProducts(profileInfo.id));
                    let profile = { ...profileInfo }
                    let picture = profile.picture
                    if (picture && picture.original && picture.original.url)
                    {
                        console.log(picture.original.url);
                        if (picture.original.url.startsWith('ipfs://'))
                        {
                            let result = picture.original.url.substring(7, picture.original.url.length)
                            profile.avatarUrl = `http://lens.infura-ipfs.io/ipfs/${result}`
                        } else
                        {
                            profile.avatarUrl = picture.original.url
                        }
                    }
                    profileData.push(profile);
                });
                setProfiles(profileData);
            });
        } catch (err)
        {
            console.log({ err })
        }
    }
    return (
        <div className='mt-10'>

            {dummyProducts.map(product => <Product key={product.id} name={product.name} category={product.category} price={product.price} image={product.image} />)}



            {
                profiles.map(profile => (
                    <div key={profile.id} className='w-2/3 shadow-md p-6 rounded-lg mb-8 flex flex-col items-center'>
                        <img className='w-48' alt="avater" src={profile.avatarUrl || 'https://picsum.photos/200'} />
                        <p className='text-xl text-center mt-6'>{profile.name}</p>
                        <p className='text-base text-gray-400  text-center mt-2'>{profile.bio}</p>
                        <Link href={`/profile/${profile.handle}`}>
                            <p className='cursor-pointer text-violet-600 text-lg font-medium text-center mt-2 mb-2'>{profile.handle}</p>
                        </Link>
                        <p className='text-pink-600 text-sm font-medium text-center'>{profile.stats.totalFollowers} followers</p>
                    </div>
                ))
            }

        </div>
    )
}