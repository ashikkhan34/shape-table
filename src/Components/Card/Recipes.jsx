/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useState } from "react";

const Recipes = ({addRecipeQueue}) => {
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        fetch('recipes.json')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, [])
    return (
        <div className="md:w-2/3">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 p-10">

            {
                recipes.map(recepe =>
                    <div key={recepe.recipe_id} className="card bg-base-100  shadow-xl border p-5">
                        <figure>
                            <img
                                className="w-full rounded-xl"
                                src={recepe.recipe_img}
                                alt="recipe" />
                        </figure>
                        <div className="card-body -ml-5">
                            <h1 className="text-xl font-bold">{recepe.recipe_name}</h1>
                            <p className="text-gray-500 text-sm">{recepe.description}</p>
                            <h3 className="text-lg font-medium">Ingredients:{recepe.ingredients.length}</h3>
                            <ul className="text-gray-600 ml-8">
                                {recepe.ingredients.map((item, idx) => <li className="list-disc" key={idx}>{item}</li>)}
                            </ul>
                            <div className="flex gap-4">
                                <div className="flex item-center">
                                <i className="fa-regular fa-clock mr-2 text-2xl"></i>
                                <p className="text-lg">{recepe.preparing_time} minute</p>

                                </div>
                                <div className="flex item-center">
                                <i className="fa-solid fa-fire text-2xl mr-2"></i>
                                <p className="text-lg">{recepe.calories} calories</p>

                                </div>
                               
                            </div>
                        </div>
                        <button onClick={()=>addRecipeQueue(recepe)} className="btn btn-success w-40 rounded-full text-lg font-semibold">want to clock</button>
                    </div>
                )
            }

            </div>
        </div>
    );
};

export default Recipes;