import React, { useState, useRef, useEffect } from "react";


const TimerMenu = ({setMenu, isOpen}) => {
    let menuRef= useRef();
    const [minutes, setMinutes] = useState(25);

    const handleChange = (event) => {
        setMinutes(event.target.value);
    };

    function checkClickedOutside(e){
        if(isOpen && !menuRef.current.contains(e.target)){
            setMenu(false);
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', checkClickedOutside);
    }

    )

    return (
        <div ref={menuRef} className="flex flex-col justify-center items-center bg-white rounded-xl shadow-lg shadow-gray-400 w-1/3 h-1/2">
            <h1 className='py-5 sm:text-4xl text-2xl font-bold text-center text-buttons -translate-y-4'>
                Pomodoro Timer
            </h1>
            <div className="flex flex-col sm:flex-row items-center sm:space-y-0 sm:space-x-4 mt-8 -translate-y-12">
                <input 
                    type="number" 
                    className="border-2 rounded-lg border-gray-300 w-20 h-12 text-center text-buttons text-2xl" 
                    name='minutes'
                    value={minutes}
                    onChange={handleChange}
                />
                <h2 className='md:text-5xl text-2xl text-center text-buttons'>Minutes</h2>
            </div>
            <button className='bg-buttons text-gray-100 p-4 rounded-2xl -translate-y-6 cursor-pointer hover:scale-110 ease-in duration-300'>Start</button>
        </div>
    );
};

export default TimerMenu;
