import PropTypes from 'prop-types';

const Current_Cook = ({current, number }) => {
    const { preparing_time, calories, recipe_name } = current;
    return (
        <tr className="text-center">
            <th className="px-6">{number}</th>
            <td className="px-6">{recipe_name}</td>
            <td className="px-6"><span>{preparing_time}</span> minutes</td>
            <td className="px-6"><span>{calories} calories</span></td>
            
        </tr>
    );
};
Current_Cook.propTypes = {
    current:PropTypes.array.isRequired,
    number:PropTypes.number,
};
export default Current_Cook;