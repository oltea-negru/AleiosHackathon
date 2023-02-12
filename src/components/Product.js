import * as React from 'react';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import PaidIcon from '@mui/icons-material/Paid';
import Snackbar from '@mui/material/Snackbar';


function Product(props)
{
    const [hearted, setHearted] = React.useState(props.favourite);
    const [inCart, setInCart] = React.useState(props.inCart);
    const [openSnackbar, setOpenSnackbar] = React.useState(false);
    const [openSnackbar2, setOpenSnackbar2] = React.useState(false);
    console.log(openSnackbar);

    return (<>
        <div className="min-h-[120px] min-w-[300px] max-w-[400px] max-h-[250px] w-1/4 h-1/4  text-justify inline-block ml-10 my-7 hover:scale-110 transform duration-300 ease-in-out hover:cursor-pointer mb-10">
            <img
                className="w-full h-full rounded-tr-md rounded-md object-cover"
                alt={props.name}
                src={props.image}
            />

            <div className='top-0 bg-white absolute right-0 rounded-bl-md p-2'>{
                hearted ? (
                    <FavoriteIcon
                        onClick={() => { setOpenSnackbar2(false); setHearted(!hearted); }}
                        className="text-red-700 "
                    />
                ) : (
                    <FavoriteBorderIcon
                        onClick={() => { setOpenSnackbar2(true); setHearted(!hearted); }}
                        className="text-red-700 "
                    />
                )}
            </div>


            <div className="w-full h-10  bottom-0 flex align-middle items-center justify-between ">

                <div className='mt-1 '>
                    <p className='text-lg font-normal'>{props.name}</p>
                    <p className='font-bold mr-2'>{props.price}</p>
                </div>

                <div className='flex flex-row'>
                    {
                        props.added ? ( <PaidOutlinedIcon
                            onClick={() => { }} className="text-green-700 scale-150" />) : (
                            inCart ? (
                                <PaidIcon
                                    onClick={() => { 
                                        setOpenSnackbar(false); setInCart(!inCart);
                                        window.location.reload();
                                        // var items = sessionStorage.getItem("items")===null ? 0 : parseInt(sessionStorage.getItem("items"));
                                        // sessionStorage.setItem("items",1);
                                        sessionStorage.removeItem("item_"+sessionStorage.getItem("items")); 
                                        sessionStorage.setItem("items", parseInt(sessionStorage.getItem("items"))-1)}}
                                        className="text-green-700 scale-150"
                                        />
                                        ) : (
                                            <PaidOutlinedIcon
                                            onClick={() => { 
                                                setOpenSnackbar(true); setInCart(!inCart); 
                                                var items = parseInt(sessionStorage.getItem("items"))>=0 ? parseInt(sessionStorage.getItem("items")):0;
                                                sessionStorage.setItem("items",items+1);
                                                sessionStorage.setItem("item_"+items, props.name); 
                                }}
                                    className="text-green-700 scale-150"
                                />
                                )
                            )}
                </div>

            </div>

        </div>
        <Snackbar
            className='absolute bottom-0 right-0'
            sx={{
                width: 100,
                color: "secondary",
                "& .MuiSnackbarContent-root": {
                    backgroundColor: "green",
                }
            }
            }
            open={openSnackbar}
            autoHideDuration={1000}
            onClose={() => setOpenSnackbar(false)}
            message="Added to cart!"
        />
        <Snackbar
            className='absolute bottom-0 right-0'
            sx={{
                width: 100,
                color: "secondary",
                "& .MuiSnackbarContent-root": {
                    backgroundColor: "red",
                }
            }
            }
            open={openSnackbar2}
            autoHideDuration={1000}
            onClose={() => setOpenSnackbar2(false)}
            message="Added to favourites!"
        />
    </>

    );
}

export default Product;
