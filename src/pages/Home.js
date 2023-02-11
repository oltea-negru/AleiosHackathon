import React from 'react'
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

function Home()
{
    const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } =
        useProSidebar();

    const toggle = () =>
    {
        toggleSidebar();
        if (toggled)
        {
            console.log(true);
            collapseSidebar();
        } else
        {
            console.log(false);
            collapseSidebar();
        }
    };

    return (
        <div className='h-screen flex'>
            <Sidebar>
                <Menu iconShape="square">
                    <MenuItem icon={<HomeOutlinedIcon />}>Home</MenuItem>
                    <MenuItem icon={<PeopleOutlinedIcon />}>Products</MenuItem>
                    <MenuItem icon={<CategoryOutlinedIcon />}>Categories</MenuItem>
                    <MenuItem icon={<HelpOutlineOutlinedIcon />}>Help</MenuItem>
                </Menu>
            </Sidebar>
            <div className='flex-1 bg-gray-200'>
                <div className='flex justify-between items-center bg-white p-4'>
                    <div className='flex items-center'>
                        <button onClick={toggle}>
                            <MenuOutlinedIcon />
                        </button>
                    </div>
                </div></div>
        </div>
    )
}

export default Home