import PropTypes from 'prop-types';

const Cook = ({ cook, number,preparingToHandler }) => {
    const { preparing_time, calories, recipe_name } = cook;
    return (
        <tr className="text-center">
            <th className="px-3">{number}</th>
            <td className="px-3">{recipe_name}</td>
            <td className="px-3"><span>{preparing_time}</span> minutes</td>
            <td className="px-3"><span>{calories} calories</span></td>
            <td className="px-3"><button onClick={()=>preparingToHandler(cook)}   className="bg-[#0BE58A] px-5 py-3 rounded-3xl my-3 text-black font-semibold">Preparing</button></td>
        </tr>
    );
};
Cook.propTypes = {
    cook:PropTypes.array.isRequired,
    number:PropTypes.number,
    preparingToHandler:PropTypes.func,
    current:PropTypes.array.isRequired
};
export default Cook;
