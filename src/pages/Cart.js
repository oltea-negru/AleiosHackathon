import React from 'react'
import Product from "../components/Product";
import ImageClothes from "../assets/images/clothes.jpg";
import ImageFood from "../assets/images/food.jpg";
import ImageTools from "../assets/images/tools.jpg";

function Cart()
{
    var cart = sessionStorage.getItem("items")===null ? 0 : parseInt(sessionStorage.getItem("items"));
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

    var total = 0;
    var kart = [];
    for(var i=0; i<cart; i++){
        if(sessionStorage.getItem("item_"+i) !== null){
            for(var j=0; j<dummyProducts.length; j++){
                if(sessionStorage.getItem("item_"+i) === dummyProducts[j].name){
                    kart.push(dummyProducts[j]);
                    if(parseInt(dummyProducts[j].price)>0){
                        total += parseInt(dummyProducts[j].price)
                    }
                }
            }
        }
    }
    if (kart==[]){
        kart = <div className='h-screen grid place-items-center text-3xl '>No items yet :(</div>
    }
    return (
        <div className="my-10 bottom-10 h-screen">
        <div className="w-full h-20 bg-white-200 flex justify-center items-center">
            <h1 className="text-4xl font-bold">Your Cart</h1>
        </div>
        
        {kart.map((product) => (
            
            <Product
                key={product.id}
                name={product.name}
                category={product.category}
                price={product.price}
                image={product.image}
                added={true}
            />
            
        ))}
        <br/>
        {/* create a div that covers the 50% of the page width with 10pt margin around it*/}
        <div className="w-full h-20 bg-gray-200 flex justify-center items-center">
            <button onClick={(e)=>{
                e.preventDefault();
                alert("Total to pay "+total)}}>Order for collection</button>
        </div>
        
    </div>  
        
    )
}

export default Cart