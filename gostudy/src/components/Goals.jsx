import React, { useRef } from "react";
import Draggable from "react-draggable";
import { FaRegWindowClose } from "react-icons/fa";
import { IoAddCircleOutline } from "react-icons/io5";
import TodoItem from "./TodoItem";

const Goals = ({ setPopUp }) => {
    const nodeRef = useRef(null);

    return (
        <Draggable nodeRef={nodeRef}>
            <div
                ref={nodeRef}
                className="rounded-2xl bg-white w-1/4 h-2/3 flex flex-col z-70 shadow-lg"
            >
                <div className="w-full bg-buttons h-1/6 flex justify-between items-center px-4 rounded-t-2xl">
                    <h2 className="text-2xl text-white">TODO:</h2>
                    <div
                        className="rounded-full bg-[#DABAA3] p-3 cursor-pointer"
                        onClick={() => setPopUp(false)}
                    >
                        <FaRegWindowClose size={24} color="white" />
                    </div>
                </div>
                <div className="flex-grow p-4">
                    {/* Content or existing goals can go here */}
                </div>
                {/* Add a new goal input */}
                <div className="flex flex-row justify-center items-center mt-auto p-4">
                    <input
                        className="border-2 rounded-lg p-3 flex border-gray-300 w-full"
                        type="text"
                        name="addGoal"
                        placeholder="Add a new todo item..."
                    />
                    <div className="bg-buttons w-10 h-10 flex justify-center items-center rounded-lg ml-2">
                        <IoAddCircleOutline size={30} color="white" />
                    </div>
                </div>
            </div>
        </Draggable>
    );
};

export default Goals;
