
import { useState } from "react";
import PropTypes from 'prop-types';
import Cook from './Cook/Cook';
import Current_Cook from './Current_Cook/Current_Cook';

const Cooks = ({ cooks, setCooks }) => {
    // const [wantToCook, setWantToCook] = useState(cooks); // List of cooks to want to cook
    const [currentCooks, setCurrentCooks] = useState([]); // List of currently cooking cooks

    const preparingToHandler = (cook) => {
        // Check if the cook is already in the "Currently cooking" list
        if (!currentCooks.some(c => c === cook)) {
            // Remove the cook from the "Want to cook" list
            const updatedWantToCook = cooks.filter(c => c !== cook);
            setCooks(updatedWantToCook);

            // Add the cook to the "Currently cooking" list
            setCurrentCooks(prevCurrentCooks => [...prevCurrentCooks, cook]);
        }
    };

    return (
        <div className="overflow-x-auto border border-separate rounded-3xl my-7">
            <div className="p-10">
                {/* Want to cook */}
                <h1 className="text-2xl font-semibold text-center my-8 border-b-2">Want to cook: {cooks.length}</h1>
                <table className="table space-x-4 text-[#878787]">
                    <thead>
                        <tr>
                            <th></th>
                            <th className="px-6">Name</th>
                            <th className="px-6">Time</th>
                            <th className="px-6">Calories</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {cooks.map((cook, idx) => (
                            <Cook key={idx} cook={cook} number={idx + 1} preparingToHandler={preparingToHandler} />
                        ))}
                    </tbody>
                </table>

                {/* Currently cooking */}
                <h1 className="text-2xl font-semibold text-center my-8 border-b-2">Currently cooking: {currentCooks.length}</h1>
                <table className="table space-x-4 text-[#878787]">
                    <thead>
                        <tr>
                            <th></th>
                            <th className="px-6">Name</th>
                            <th className="px-6">Time</th>
                            <th className="px-6">Calories</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentCooks.map((cook, idx) => (
                            <Current_Cook key={idx} current={cook} number={idx + 1} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

Cooks.propTypes = {
    cooks: PropTypes.array.isRequired,
    setCooks: PropTypes.array.isRequired,
};

export default Cooks;



