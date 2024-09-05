import React from "react";
import { AiOutlineCheckCircle, AiFillCheckCircle } from "react-icons/ai";
import { FaTrash } from "react-icons/fa";

const TodoItem = ({ goal, toggleComplete, deleteGoal }) => {
    return (
        <div className="flex items-center space-x-3 p-2 border-b border-gray-200">
            <div className="cursor-pointer" onClick={toggleComplete}>
                {goal.completed ? (
                    <AiFillCheckCircle size={24} color="green" />
                ) : (
                    <AiOutlineCheckCircle size={24} color="gray" />
                )}
            </div>
            <p className={`flex-grow text-lg ${goal.completed ? "line-through text-gray-400" : ""}`}>
                {goal.description}
            </p>
            <div className="cursor-pointer" onClick={deleteGoal}>
                <FaTrash size={20} color="buttons" />
            </div>
        </div>
    );
};

export default TodoItem;
