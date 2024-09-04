import React, { useRef, useEffect } from "react";
import { AiOutlineCheck } from "react-icons/ai";

const SettingsMenu = ({ setMenu, isOpen, waterBreaks, setWaterBreaks, showSpotifyPlaylist, setShowSpotifyPlaylist, showGoals, setShowGoals }) => {

    const handleWaterBreaks = () => {
        setWaterBreaks(!waterBreaks);
    };

    function checkClickedOutsideSettings(e) {
        if (isOpen && !settingMenuRef.current.contains(e.target)) {
            setMenu(false);
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", checkClickedOutsideSettings);
        return () => document.removeEventListener("mousedown", checkClickedOutsideSettings);
    }, [isOpen]);

    let settingMenuRef = useRef(null);

    return (
        <div ref={settingMenuRef} className="flex flex-col justify-center bg-white rounded-xl shadow-lg shadow-gray-400 w-1/3 h-1/2 p-6">
            <h1 className="py-4 sm:text-4xl text-2xl font-bold text-center text-buttons">Settings</h1>
            <div className="flex items-center justify-between my-4">
                <h3 className="sm:text-xl text-md font-semibold">Water Breaks</h3>
                <div
                    className={`cursor-pointer w-7 h-7 rounded-full border-2 border-gray-300 flex items-center justify-center ${waterBreaks ? "bg-buttons border-buttons" : ""}`}
                    onClick={handleWaterBreaks}
                >
                    {waterBreaks && <AiOutlineCheck size={20} color="white" />}
                </div>
            </div>
        </div>
    );
};

export default SettingsMenu;
