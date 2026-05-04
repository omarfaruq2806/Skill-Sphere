import React from 'react';

const loading = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <span className="loading loading-spinner loading-xl text-purple-500 w-32 h-32"></span>
        </div>
    );
};

export default loading;