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
        <div className="h-64 w-80  text-justify inline-block ml-10 my-7 hover:scale-110 transform duration-300 ease-in-out hover:cursor-pointer">
            <img
                onClick={() => setHearted(!hearted)}
                className="w-full h-full rounded-tr-md rounded-tl-md object-cover"
                alt={props.name}
                src={props.image}
            />

            <div className="w-full h-10  bottom-0 flex align-middle items-center justify-around bg-orange-100 rounded-br-md rounded-bl-md ">
                {
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

                <p className='text-lg font-normal'>{props.name}</p>

                <div className='flex flex-row'>
                    <p className='font-bold mr-2'>{props.price}</p>
                    {
                        inCart ? (
                            <PaidIcon
                                onClick={() => { setOpenSnackbar(false); setInCart(!inCart); }}
                                className="text-green-700 scale-125"
                            />
                        ) : (
                            <PaidOutlinedIcon
                                onClick={() => { setOpenSnackbar(true); setInCart(!inCart); }}
                                className="text-green-700 scale-125"
                            />
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
