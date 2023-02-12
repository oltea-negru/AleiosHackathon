import React, { useState } from "react";
import { Web3ReactProvider } from '@web3-react/core';
import { ethers,utils } from "ethers";

const AddItem = () => {
  // State to store the item details
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [imageHash, setImageHash] = useState("");

  // Function to add an item to the marketplace
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Connect to the Ethereum network
    const web3 = new ethers.providers.Web3Provider(window.ethereum);

    // Get the address of the contract
    const contractAddress = "0x...";

    // Get the ABI of the contract
    const contractABI = [
      {
        constant: false,
        inputs: [
          {
            name: "name",
            type: "string"
          },
          {
            name: "price",
            type: "uint256"
          },
          {
            name: "category",
            type: "string"
          },
          {
            name: "quantity",
            type: "uint256"
          },
          {
            name: "imageHash",
            type: "string"
          }
        ],
        name: "addItem",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
      }
    ];

    // Get the contract instance
    const contract = new web3.eth.Contract(contractABI, contractAddress);

    // Add the item to the marketplace
    contract.methods
      .addItem(name, price, category, quantity, imageHash)
      .send({ from: web3.eth.defaultAccount })
      .then(() => {
        console.log("Item added");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="category">Category:</label>
        <input
          type="text"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="quantity">Quantity:</label>
        <input
          type="number"
          id="quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="imageHash">Image Hash:</label>
        <input
          type="text"
          id="imageHash"
          value={imageHash}
          onChange={(e) => setImageHash(e.target.value)}
        />
      </div>
      <button type="submit">Add Item</button>
    </form>
  );
};

export default AddItem;