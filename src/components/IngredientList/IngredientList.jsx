

const IngredientList = ({ availableIngredients, addToBurger}) => {

    return (
        <div>
            <h2>Available Ingredients</h2>
            <ul>
            {availableIngredients.map((ingredient, index ) => (
                <li key={index} style={{ backgroundColor: ingredient.color }}>
                  {ingredient.name}
                 <button onClick={() => addToBurger(ingredient)}>+</button>
                </li>
                ))}
            </ul>
        </div>
        );
    };
    




  export default IngredientList;





  