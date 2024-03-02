import React from 'react';

const About = () => {

    return (
        <div className='content-center'>
            <h1 className='text-slate-700 text-3xl'>About</h1>
            <div className='h-fit bg-blue-400 my-5 w-3/4 content-center mx-auto rounded-md text-lg text-slate-600'>
                <p>This is a demo project given as a challenge by Dreamschools</p>
                <p>It is a simple CRUD application for schools</p>
                <p>It is built using React and Tailwind CSS</p>
                <p>The backend is running Express.js. Images are stored on Firebase Cloud Storage, and Data is stored in a MongoDB Atlas.</p>
                <p>It is hosted on UWaterloo CS Club Cloud</p>
                <p>Copyright© 2024 - Leon Zhang - All Rights Reserved</p>
            </div>
        </div>
    );
}

export default About;