import React from "react";
import { AiOutlineCheckCircle, AiFillCheckCircle } from "react-icons/ai";

const TodoItem = ({ goal, toggleComplete }) => {
    return (
        <div className="flex items-center space-x-3 p-2 border-b border-gray-200">
            <div className="cursor-pointer" onClick={toggleComplete}>
                {goal.completed ? (
                    <AiFillCheckCircle size={24} color="green" />
                ) : (
                    <AiOutlineCheckCircle size={24} color="gray" />
                )}
            </div>
            <p className={`text-lg ${goal.completed ? "line-through text-gray-400" : ""}`}>
                {goal.description}
            </p>
        </div>
    );
};

export default TodoItem;
