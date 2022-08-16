import "./App.css";
import { ADD_TO_CART } from "./redux/actions";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const product = {
    name: "T-Shirt",
    price: "50",
  };
  return (
    <div>
     
      <button onClick={() => dispatch(ADD_TO_CART(product))}>Click</button>
      
    </div>
  );
}

export default App;
