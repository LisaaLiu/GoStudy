import React, { useState } from "react";
import { MdLibraryAdd } from "react-icons/md";
import Goals from "./Goals";

const Main = () => {
    const [addNewGoal, setGoalPage] = useState(false);
    const [goals, setGoals] = useState([]); // Store goals here

    const handleAddGoal = () => {
        setGoalPage(!addNewGoal);
    };

    const closePopUp = () => {
        setGoalPage(false);
    };

    const addGoal = (goal) => {
        setGoals([...goals, goal]);
    };

    const toggleComplete = (index) => {
        const updatedGoals = goals.map((goal, i) =>
            i === index ? { ...goal, completed: !goal.completed } : goal
        );
        setGoals(updatedGoals);
    };

    return (
        <div id="main" className="relative">
            {addNewGoal && (
                <div className="fixed inset-0 flex justify-center items-center z-50">
                    <Goals
                        setPopUp={closePopUp}
                        goals={goals}
                        addGoal={addGoal}
                        toggleComplete={toggleComplete}
                    />
                </div>
            )}

            <div className="flex flex-col justify-center items-center h-screen bg-[#DABAA3]">
                <div className="relative w-1/2 max-w-md">
                    <img className="w-full" src="/src/assets/girl-8602014_640.png" alt="" />
                    {!addNewGoal && (
                        <div className="absolute left-1/3 top-1/2 transform -translate-x-1/4 -translate-y-2/3 flex justify-center items-center w-12 h-12 rounded-full bg-[#712013] shadow-lg shadow-gray-400 cursor-pointer hover:scale-110 ease-in duration-200 md:w-16 md:h-16">
                            <MdLibraryAdd onClick={handleAddGoal} size={30} color="white" />
                        </div>
                    )}
                </div>
                <p className="text-2xl text-semibold text-buttons p-4">Shouldn't you be studying?</p>
            </div>
        </div>
    );
};

export default Main;
