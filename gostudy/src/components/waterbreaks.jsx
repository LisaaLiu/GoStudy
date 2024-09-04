import React from "react";

const Waterbreak = ({ onClose }) => {
    return (
        <div className="flex flex-col justify-center bg-white rounded-xl shadow-lg shadow-gray-400 w-1/3 h-1/2 p-6">
            <h1 className='py-5 md:text-5xl text-2xl font-bold text-center text-buttons'>
                Reminder!
            </h1>
            <h2 className="md:text-2xl text-lg text-center text-buttons">Drink your water</h2>
            <button 
                className='bg-buttons text-gray-100 py-2 px-4 rounded-2xl mt-8 cursor-pointer hover:scale-110 ease-in duration-300'
                onClick={onClose}
            >
                Close
            </button>
        </div>
    );
};

export default Waterbreak;
