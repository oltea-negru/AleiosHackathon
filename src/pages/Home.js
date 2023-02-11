import React from 'react'
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import SideBar from '../components/SideBar';
import Background from '../assets/images/background.jpg'

export default function Home()
{

    return (
        <div className='mt-5 bg-lockers bg-cover bg-center h-screen min-w-[300px] '>
            <div className='text-7xl text-center bg-white mt-10 py-3 px-3 rounded-md mx-5 my-3'>Welcome to your cheap shop!</div>
            <div className='flex flex-row'>
                <p className='text-3xl'>one man's trash is another man's treasure to the next level </p>
                <img alt="lockers" src={Background} className='w-[50%] max-w-[800px] object-contain absolute right-5' />
            </div>
        </div>
    )

}