import React from 'react';
import Navlink from '../homepage/Navlink';
import Profile from '../homepage/LogIn';
import Searchbar from '../homepage/Searchbar';

const Navbar = () => {
    return (
        <div className='container mx-auto flex justify-between items-center p-4'>

            <div>
                <h1 className='text-3xl font-bold text-purple-600'>Skill Sphere</h1>
            </div>
            <div className='flex gap-4 items-center font-medium'>
                <Navlink href='/'>Home</Navlink>
                <Navlink href='/courses'>Courses</Navlink>
                <Navlink href='/profile'>Profile</Navlink>
            </div>
            {/* <Searchbar></Searchbar> */}
            <Profile></Profile>
        </div>
    );
};

export default Navbar;