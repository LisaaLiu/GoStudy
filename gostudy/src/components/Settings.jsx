import React, { useState, useEffect} from "react";
import { IoSettingsSharp } from "react-icons/io5";
import { AiOutlineSound } from "react-icons/ai";
import { MdOutlineTimer } from "react-icons/md";
import SettingsMenu from "./SettingsMenu";
import TimerMenu from "./TimerMenu";

const Settings = () => {
    const [openSettings, setOpenSettings] = useState(false);
    const [sounds, setSounds] = useState(false);
    const [timer, setTimer] = useState(false);

    const handleOpenSettings = () => {
        setOpenSettings(!openSettings);
    };

    const handleSounds = () => {
        setSounds(!sounds);
    };

    function handleTimer() {
        setTimer(!timer);
    };


    return (
        <div>
            <div className="flex justify-end items-center pt-4 pr-4 space-x-5 z-[70] fixed top-0 right-0">
                <div className="rounded-full shadow-lg bg-buttons shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
                    onClick={handleSounds}
                >
                    <AiOutlineSound size={30} color="white" />
                </div>
                <div className="rounded-full shadow-lg bg-buttons shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
                    onClick={
                        handleTimer
                    }
                >
                    <MdOutlineTimer size={30} color="white" />
                </div>
                <div className="rounded-full shadow-lg bg-buttons shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
                    onClick={
                        handleOpenSettings}
                >
                    <IoSettingsSharp size={30} color="white" />
                </div>
            </div>
            {openSettings && (
                <div className="fixed w-full h-screen bg-black/40 flex flex-col justify-center items-center z-[99]">
                    <SettingsMenu setMenu={setOpenSettings} isOpen={openSettings}/>
                </div>
            )}
            {timer && (
                <div className="fixed w-full h-screen bg-black/40 flex flex-col justify-center items-center z-[99]" >
                    <TimerMenu setMenu={setTimer} isOpen={timer}/>
                </div>
            )}
        </div>
    );
};

export default Settings;
