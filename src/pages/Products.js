"use client";

import { use, useEffect, useState } from "react";
import { client, exploreProfiles, getProducts } from "../api/api";
import Link from "next/link";
import Product from "../components/Product";
import ImageClothes from "../assets/images/clothes.jpg";
import ImageFood from "../assets/images/food.jpg";
import ImageTools from "../assets/images/tools.jpg";

import { gql } from "@apollo/client";
import { USER } from "../api/api";

export default function Home()
{
    const [searchWord, setSearchWord] = useState("");

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

    const [products, setProducts] = useState(dummyProducts);

    // needed for seaching a product by name
    useEffect(() =>
    {
        setProducts(dummyProducts.filter((product) => product.name.toLowerCase().includes(searchWord.toLowerCase())));
    }, [searchWord])
        ;

    return (
        <div className="my-10 bottom-10 h-screen">
            <div className="grid place-items-center">
                <input
                    type="text"
                    placeholder="Search"
                    value={searchWord}
                    className="w-[30%] border-2 border-green-600 px-6 py-2 rounded-md focus:border-red-900"
                    onChange={(e) => { setSearchWord(e.target.value); }}
                />
            </div>

            {products.map((product) => (
                <Product
                    key={product.id}
                    name={product.name}
                    category={product.category}
                    price={product.price}
                    image={product.image}
                />
            ))}
        </div>
    );
}
