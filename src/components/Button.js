import React from 'react';

const button = (props) => {
    return (
        <div>
            <button className=' bg-blue-500 text-white  py-2 px-6 rounded md:ml-8 shadow-lg shadow-blue-500/50 hover:bg-purple-500 duration-500 focus:ring-2 focus:outline-none focus:ring-white focus:ring-offset-2'>
                {props.children}
            </button>
        </div>
    );
};

export default button;