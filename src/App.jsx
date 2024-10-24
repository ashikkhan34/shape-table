import { useState } from "react";
import Recipes from "./Components/Card/Recipes";
import Sidebar from "./Components/Card/Sidebar";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import AutoType from "./Components/AutoType/AutoType";


const App = () => {

  const [recipeQueue, setRecipeQueue] = useState([])
  const [preparedRecipe, setPreparedRecipe] = useState([])
  const [totalTime, setTotalTime] = useState(0)
  const [totalCalories, setTotalCalories] = useState(0)

  const addRecipeQueue = (recipe) =>{

    const isExist = recipeQueue.find(
      previousRecipe => previousRecipe.recipe_id === recipe.recipe_id
    )
    if(!isExist){
      setRecipeQueue([...recipeQueue,recipe])
    }
    else{
      alert('Recipe already exists is the queue')
    }
    
  }

const handleRemove = id =>{
  //find which recipe to remove
  const deleteRecipe = recipeQueue.find(recipe => recipe.recipe_id === id)

  //remove from want t cook table
  const updateQueue = recipeQueue.filter(recipe => recipe.recipe_id !== id)
  setRecipeQueue(updateQueue)
  setPreparedRecipe([...preparedRecipe,deleteRecipe])

}

const calculateTimeAndCalories = (time,calories) =>{
  setTotalTime(totalTime + time)
  setTotalCalories(totalCalories+ calories)
}


  return (
    <div>
      <Header></Header>
      <AutoType></AutoType>
      <Hero></Hero>
      <section className="flex flex-col md:flex-row gap-6">
        <Recipes addRecipeQueue={addRecipeQueue}></Recipes>
        <Sidebar recipeQueue={recipeQueue}
        handleRemove={handleRemove}
        preparedRecipe = {preparedRecipe}
        calculateTimeAndCalories= {calculateTimeAndCalories}
        totalTime = {totalTime}
        totalCalories = {totalCalories}
        ></Sidebar>
      </section>
    </div>
  );
};

export default App;