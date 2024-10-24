/* eslint-disable react/prop-types */

const Sidebar = ({ recipeQueue,handleRemove,preparedRecipe,calculateTimeAndCalories,totalTime,totalCalories}) => {
    return (
        <div className="md:1/3 border-2 rounded-lg text-gray-600 mt-10 p-2 bg-base-100">
            {/*want to cook table */}
            <div className="overflow-x-auto">
                <h2 className="border-b-2 mx-auto font-semibold text-2xl pb-2 text-gray-800 text-center">Want to Cook:{recipeQueue.length}</h2>
                <table className="table w-auto">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <td>Time</td>
                            <td>Calories</td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                       {recipeQueue.map((recipe, index) => (
                        <tr className="hover" key={index}>
                            <th>{index + 1}</th>
                            <td>{recipe.recipe_name}</td>
                            <td>{recipe.preparing_time}</td>
                            <td>{recipe.calories}</td>
                            <td>
                                <button onClick={()=>{
                                    handleRemove(recipe.recipe_id)
                                    calculateTimeAndCalories(recipe.preparing_time,recipe.calories)
                                }
                                } className="py-2 text-white font-lg w-24  bg-green-600 rounded-full "> Preparing</button>
                            </td>
                            

                        </tr>
                       ))}
                    </tbody>
                </table>
            </div>

            {/* currently cooking table */}

            <div className="overflow-x-auto mt-9">
                <h2 className="border-b-2 mx-auto font-semibold text-2xl pb-2 text-gray-800 text-center">Currently Cooking:{preparedRecipe.length}</h2>
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <td>Time</td>
                            <td>Calories</td>
                        </tr>
                    </thead>
                    <tbody>
                       {preparedRecipe.map((recipe, index) => (
                        <tr className="hover" key={index}>
                            <th>{index + 1}</th>
                            <td>{recipe.recipe_name}</td>
                            <td>{recipe.preparing_time}</td>
                            <td>{recipe.calories}</td>
                            
                            

                        </tr>
                       ))}
                       <tr>
                        <th></th>
                        <td></td>
                        <td>Total time = {totalTime}</td>
                        <td>Total Calories = {totalCalories}</td>
                       </tr>
                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default Sidebar;