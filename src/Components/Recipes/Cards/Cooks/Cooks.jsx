// import PropTypes  from 'prop-types';
// import Cook from './Cook/Cook';
// const Cooks = ({cooks}) => {
//     return (
//         <div className="overflow-x-auto border  border-separate rounded-3xl my-7">
//             <div className="p-10">
//                 <h1 className="text-2xl font-semibold text-center my-8">Want to cook: {cooks.length}</h1>
//                 <table className="table space-x-4 text-[#878787] ">
//                     <thead>
//                         <tr>
//                             <th></th>
//                             <th>Name</th>
//                             <th>Time</th>
//                             <th>Calories</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                     {
//             cooks.map((cook,idx)=> <Cook key={idx} cook={cook} number={idx + 1}
//             ></Cook>)
//           }

                       
//                     </tbody>
                
//                 </table>
//             </div>
//         </div>
//     );
// };
// Cooks.propTypes={
//     cooks:PropTypes.array,

//   }
// export default Cooks;


import PropTypes from 'prop-types';
import Cook from './Cook/Cook';

const Cooks = ({ cooks }) => {
    return (
        <div className="overflow-x-auto border border-separate rounded-3xl my-7">
            <div className="p-10">
                <h1 className="text-2xl font-semibold text-center my-8 border-b-2">Want to cook: {cooks.length}</h1>
                <table className="table space-x-4 text-[#878787]">
                    <thead >
                        <tr >
                            <th></th>
                            <th className="px-6">Name</th>
                            <th className="px-6">Time</th>
                            <th className="px-6">Calories</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {cooks.map((cook, idx) => (
                            <Cook key={idx} cook={cook} number={idx + 1} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

Cooks.propTypes = {
    cooks: PropTypes.array.isRequired,
};

export default Cooks;

