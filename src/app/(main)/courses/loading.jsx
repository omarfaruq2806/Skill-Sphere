import React from 'react';

const loading = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <span className="loading loading-ring text-purple-500 w-20 md:w-32 h-20 md:h-32"></span>
        </div>
    );
};

export default loading;