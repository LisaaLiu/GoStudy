import React, { useState, useEffect, useRef } from "react";
import { IoSettingsSharp, IoVolumeMuteOutline } from "react-icons/io5";
import { AiOutlineSound } from "react-icons/ai";
import { MdOutlineTimer } from "react-icons/md";
import SettingsMenu from "./SettingsMenu";
import TimerMenu from "./TimerMenu";
import Waterbreak from "./waterbreaks";

const Settings = () => {
    const [openSettings, setOpenSettings] = useState(false);
    const [sounds, setSounds] = useState(false);
    const [timer, setTimer] = useState(false);
    const [timeRemaining, setTimeRemaining] = useState(1500); // Default to 25 minutes
    const [isRunning, setIsRunning] = useState(false);
    const [isReset, setReset] = useState(true);

    // Persisting settings values
    const [waterBreaks, setWaterBreaks] = useState(false);
    const [showWaterBreak, setShowWaterBreak] = useState(false);

    const audioRef = useRef(null); // Ref for the audio element

    const handleOpenSettings = () => {
        setOpenSettings(!openSettings);
    };

    const handleSounds = () => {
        setSounds(!sounds);
    };

    function handleTimer() {
        setTimer(!timer);
    }

    function closeWaterBreak() {
        setShowWaterBreak(false);
    }

    useEffect(() => {
        let interval = null;
        if (isRunning && timeRemaining > 0) {
            interval = setInterval(() => {
                setTimeRemaining((prevTime) => prevTime - 1);
            }, 1000);
        } else if (timeRemaining <= 0) {
            clearInterval(interval);
            setIsRunning(false);
            setTimeRemaining(0);
        }
        return () => clearInterval(interval);
    }, [isRunning, timeRemaining]);

    useEffect(() => {
        if (waterBreaks) {
            // Set up the interval for water breaks
            const breakInterval = setInterval(() => {
                setShowWaterBreak(true);
            }, 3600000); // 1 hour in milliseconds

            return () => clearInterval(breakInterval);
        }
    }, [waterBreaks]);

    useEffect(() => {
        if (sounds) {
            // Play background music
            if (audioRef.current) {
                audioRef.current.play();
            }
        } else {
            // Pause background music
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current.currentTime = 0; // Reset to the beginning
            }
        }
    }, [sounds]);

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    return (
        <div>
            <audio ref={audioRef} loop>
                <source src="/src/assets/backgroundSound.mp3" type="audio/mpeg" />
            </audio>
            
            <div className="flex justify-end items-center pt-4 pr-4 space-x-5 z-[70] fixed top-0 right-0">
            <div className={`rounded-full shadow-lg ${sounds ? "bg-[#F8ECE3]" : "bg-buttons"} shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300`} onClick={handleSounds}>
                {sounds ? (
                    <IoVolumeMuteOutline size={30} color="buttons" />
                ) : (
                    <AiOutlineSound size={30} color="white" />
                )}
            </div>

                <div
                    className="rounded-full shadow-lg bg-buttons shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
                    onClick={handleTimer}
                >
                    {(isReset||!isRunning) ? (
                        <MdOutlineTimer size={30} color="white" />
                    ) : (
                        <span className="text-white text-xl">{formatTime(timeRemaining)}</span>
                    )}
                </div>
                <div
                    className="rounded-full shadow-lg bg-buttons shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
                    onClick={handleOpenSettings}
                >
                    <IoSettingsSharp size={30} color="white" />
                </div>
            </div>
            {openSettings && (
                <div className="fixed w-full h-screen bg-black/40 flex flex-col justify-center items-center z-[99]">
                    <SettingsMenu 
                        setMenu={setOpenSettings} 
                        isOpen={openSettings}
                        waterBreaks={waterBreaks}
                        setWaterBreaks={setWaterBreaks}
                    />
                </div>
            )}
            {timer && (
                <div className="fixed w-full h-screen bg-black/40 flex flex-col justify-center items-center z-[99]" >
                    <TimerMenu 
                        setMenu={setTimer} 
                        isOpen={timer} 
                        setTimeRemaining={setTimeRemaining} 
                        timeRemaining={timeRemaining}
                        isRunning={isRunning}
                        setIsRunning={setIsRunning}
                        setReset={setReset}
                    />
                </div>
            )}
            {showWaterBreak && (
                <div className="fixed w-full h-screen bg-black/40 flex flex-col justify-center items-center z-[99]">
                    <Waterbreak onClose={closeWaterBreak}/>
                </div>
            )}
        </div>
    );
};

export default Settings;
