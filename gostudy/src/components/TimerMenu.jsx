import React, { useState, useEffect, useRef } from "react";

const TimerMenu = ({ setMenu, isOpen, setTimeRemaining, timeRemaining, isRunning, setIsRunning, setReset }) => {
    const menuRef = useRef();
    const [initialTime, setInitialTime] = useState(timeRemaining || 25 * 60);
    const [minutes, setMinutes] = useState(Math.floor(timeRemaining / 60));
    const [seconds, setSeconds] = useState(timeRemaining % 60);
    const [isPaused, setPaused] = useState(false);

    const handleChange = (event) => {
        const newMinutes = event.target.value;
        setMinutes(newMinutes);
        setSeconds(0);
        const newTime = newMinutes * 60;
        setTimeRemaining(newTime);
        setInitialTime(newTime);
    };

    const startTimer = () => {
        setIsRunning(true);
        setPaused(false);
        setReset(false);
    };

    const pauseTimer = () => {
        setIsRunning(false);
        setPaused(true);
        setReset(false);
    };

    const resetTimer = () => {
        setIsRunning(false);
        setTimeRemaining(initialTime);
        setPaused(false);
        setReset(true);
    };

    useEffect(() => {
        setMinutes(Math.floor(timeRemaining / 60));
        setSeconds(timeRemaining % 60);
    }, [timeRemaining]);

    useEffect(() => {
        function checkClickedOutside(e) {
            if (isOpen && !menuRef.current.contains(e.target)) {
                setMenu(false);
            }
        }

        document.addEventListener('mousedown', checkClickedOutside);
        return () => {
            document.removeEventListener('mousedown', checkClickedOutside);
        };
    }, [isOpen]);

    const formatTime = (minutes, seconds) => {
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    return (
        <div ref={menuRef} className="flex flex-col justify-center items-center bg-white rounded-xl shadow-lg shadow-gray-400 w-1/3 h-1/2">
            <h1 className='py-5 sm:text-4xl text-2xl font-bold text-center text-buttons -translate-y-4'>
                Pomodoro Timer
            </h1>
            {isRunning ? (
                <div className="flex flex-col justify-center items-center">
                    <h2 className="md:text-5xl text-3xl font-semibold text-center text-buttons mt-8">
                        {formatTime(minutes, seconds)}
                    </h2>
                    <div className="flex flex-row gap-3">
                        <button 
                            className='bg-buttons text-gray-100 p-4 rounded-2xl mt-8 cursor-pointer hover:scale-110 ease-in duration-300'
                            onClick={pauseTimer}
                        >
                            Pause
                        </button>
                        <button 
                            className='bg-buttons text-gray-100 p-4 rounded-2xl mt-8 cursor-pointer hover:scale-110 ease-in duration-300'
                            onClick={resetTimer}
                        >
                            Reset
                        </button>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col items-center sm:space-y-0 sm:space-x-4 mt-8 -translate-y-12">
                   { isPaused?(<h2 className="md:text-5xl text-3xl font-semibold text-center text-buttons my-8">
                        {formatTime(minutes, seconds)}
                    </h2>):(
                        <div className="flex flex-row items-center py-5">
                            <input 
                                type="number" 
                                className="border-2 rounded-lg border-gray-300 w-20 h-12 text-center text-buttons text-2xl" 
                                name='minutes'
                                value={minutes}
                                onChange={handleChange}
                            />
                            <h2 className='md:text-5xl text-2xl text-center text-buttons'>Minutes</h2>
                        </div>)
                   }
                    <button 
                        className='bg-buttons text-gray-100 p-4 rounded-2xl mt-8 cursor-pointer hover:scale-110 ease-in duration-300'
                        onClick={startTimer}
                    >
                        Start
                    </button>
                </div>
            )}
        </div>
    );
};

export default TimerMenu;
