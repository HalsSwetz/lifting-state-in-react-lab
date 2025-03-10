

const BurgerStack = ({ stack, removeFromBurger }) => {
    return (
        <div>
            <h2>Your Burger Stack</h2>
            <ul>
            {stack.map((ingredient, idx) => (
                <li key={idx} style={{ backgroundColor: ingredient.color }}>
                    {ingredient.name}
                    <button onClick={() => removeFromBurger(idx)}>X</button>
                </li>
            ))}
            </ul>
        </div>
    );
};

  
  export default BurgerStack;



