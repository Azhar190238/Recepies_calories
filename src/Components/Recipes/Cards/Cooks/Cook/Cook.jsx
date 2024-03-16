import PropTypes from 'prop-types';

const Cook = ({ cook, number }) => {
    const { preparing_time, calories, recipe_name } = cook;
    return (
        <tr className="text-center">
            <th>{number}</th>
            <td>{recipe_name}</td>
            <td><span>{preparing_time}</span> minutes</td>
            <td><span>{calories} calories</span></td>
            <td><button  className="bg-[#0BE58A] px-5 py-3 rounded-3xl my-3 text-black font-semibold">Preparing</button></td>
        </tr>
    );
};
Cook.propTypes = {
    cook:PropTypes.array.isRequired,
    number:PropTypes.number,
};
export default Cook;
