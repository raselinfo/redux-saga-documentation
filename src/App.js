import "./App.css";
import { ADD_TO_CART } from "./redux/actions";
import { useDispatch, useSelector } from "react-redux";
function App() {
  const dispatch = useDispatch();
  const result = useSelector((state) => state.cartData);
  console.log(result);

  const product = {
    name: "T-Shirt",
    price: "50",
  };
  return (
    <div>
      {result.length || 0}
      <button onClick={() => dispatch(ADD_TO_CART(product))}>Click</button>
    </div>
  );
}

export default App;
