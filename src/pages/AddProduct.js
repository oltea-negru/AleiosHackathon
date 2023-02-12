import React from "react";
import Placeholder from "../assets/images/placeholder.png";
import { useState } from "react";
import uuid4 from "uuid4";
import { Snackbar } from "@mui/material";
import { Web3Storage, File, getFilesFromPath } from 'web3.storage'

function getAccessToken () {
    return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDJlRmRmZjBmY0ZEZUIzQzRCMDY1NjlhMjRlOTJGOTBBMDcyNTk5MDYiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NzYxNzQ4MzcyNTEsIm5hbWUiOiJBbGVpb3NIYWNrIn0.0M1Q3wiKjJ18Cw75O0VeOA9qsz3GkxHV30PHESsE7v8";
}

function makeStorageClient () {
    return new Web3Storage({ token: getAccessToken() })
}

const storage = makeStorageClient()

function AddProduct()
{
    const [image, setImage] = useState(Placeholder);
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [category, setCategory] = useState("food");
    const [quantity, setQuantity] = useState(0);
    const [openSnackbar, setOpenSnackbar] = useState(false);

    // gets the image from the file input
    function onFileSelected(event)
    {
        var selectedFile = event.target.files[0];
        var reader = new FileReader();

        var imgtag = document.getElementById("myimage");
        imgtag.title = selectedFile.name;

        reader.onload = function (event)
        {
            imgtag.src = event.target.result;
            setImage(event.target.result);
        };

        reader.readAsDataURL(selectedFile);
    }
    async function store(image){
        const finalContent = JSON.stringify(image);
        const file = new File([finalContent], {
            type: 'text/plain',
        });
        const cid = await storage.put([file]);

    }

    // handles adding new product to the database?
    function addProduct()
    {
        store(image);
        let data = {
            id: uuid4(),
            name: name,
            price: price,
            category: category,
            quantity: quantity,
            image: image,
        };

        console.log(data);

        // do here the post request to add the product to the database and after it was successful, show the snackbar (it closes automatically after 2 seconds)
        setOpenSnackbar(true);
    }

    return (
        <div className="h-screen grid place-items-center">
            <form className="flex flex-col h-2/3 justify-evenly">
                <div>
                    <img
                        id="myimage"
                        className="rounded-md h-56"
                        src={Placeholder}
                        alt="upload"
                    />
                    <input
                        className="mt-2"
                        type="file"
                        onChange={(e) => onFileSelected(e)}
                    />
                </div>

                <label className="text-2xl font-bold">Name</label>
                <input
                    className="border-2 border-gray-300 p-2 rounded-md"
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                />

                <label className="text-2xl font-bold">Price</label>
                <input
                    className="border-2 border-gray-300 p-2 rounded-md"
                    min={0}
                    type="number"
                    onChange={(e) => setPrice(e.target.value)}
                />

                <label className="text-2xl font-bold">Category</label>
                <select
                    className="border-2 border-gray-300 p-2 rounded-md"
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="food">Food</option>
                    <option value="tools">Tools</option>
                    <option value="clothes">Clothes</option>
                </select>

                <label className="text-2xl font-bold">Quantity</label>
                <input
                    className="border-2 border-gray-300 p-2 rounded-md"
                    type="number"
                    min={0}
                    onChange={(e) => setQuantity(e.target.value)}
                />

                <button
                    type="button"
                    className="bg-[#f0ab57] hover:bg-[#ffc884] focus:outline-none active:scale-110 text-white p-2 rounded-md mt-2"
                    onClick={() => addProduct()}
                >
                    Add
                </button>
            </form>

            {/* dw about this is just a pop up after you click submit */}
            <Snackbar
                className="absolute bottom-0 right-0"
                sx={{
                    width: 100,
                    color: "secondary",
                    "& .MuiSnackbarContent-root": {
                        backgroundColor: "orange",
                    },
                }}
                open={openSnackbar}
                autoHideDuration={2000}
                onClose={() => setOpenSnackbar(false)}
                message="New product added to your list!"
            />
        </div>
    );
}

export default AddProduct;
