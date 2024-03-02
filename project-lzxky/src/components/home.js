import { React, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SchoolsList from './schoolslist';
const Home = () => {
    useEffect(() => {
        document.title = "Home - Project LZXKY";
    }, []);
    return (
    <div className='h-full w-full flex justify-center items-center flex-col'>
        <div className='w-full flex flex-col md:flex-row justify-center items-right'>
            <h1 className='text-4xl font-bold mt-3 mx-auto text-center'>School List</h1>
            <Link className='w-3/4 md:w-auto bg-blue-500 mx-auto text-white px-screen md:px-5 py-2 rounded-md md:mt-3 md:-ml-20 md:mr-5
                                hover:bg-blue-600 hover:text-gray-300' to="/create">Create</Link>
        </div>
        <SchoolsList />
    </div>
    );
};
export default Home;