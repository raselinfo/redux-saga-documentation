# Redux Saga

### What is Redux?

- A Library for state management
- For Global data management
- A predictable state container
- it's can share data in any component to any component

<img src="./image/redux-diagram.png">
<img src="./image/redux-diagram2.png">

### What is Saga

- Handle async data in Redux Like APIs
- It can be called middleware
- Middleware between reacting and redux
- Here we can write Async operation like time taking logics and API calls.

<img src="./image/saga1.gif">
<img src="./image/saga2.png">
<img src="./image/saga3.png">

### Installing React Redux,Redux and redux-saga

```js
    yarn add redux react-redux redux-saga
```

### Websites

<a href="https://redux.js.org/introduction/getting-started"> Redux </a>,
<a href="https://react-redux.js.org/introduction/getting-started"> React Redux </a>,
<a href="https://redux-saga.js.org/docs/introduction/GettingStarted/"> Redux Saga </a>

### Setup

<img src="./image/setup1.png">
Provider : we need provide our application a provider with store
```js
import { Provider } from "react-redux";
import store from "./redux/store";

root.render(
<Provider store={store}>
<App />
</Provider>
);

### Action

- Actions are the plain function
- Get data from ReactJS
- Send data to Reducer after process
- Must have type key in return statement
- Must sync type with Reducer

**The example of how action looks like**
_action.js:_

```js
export const ADD_TO_CART = (data) => {
  console.log("add to cart", data);
  return {
    type: "ADD_TO_CART",
    data,
  };
};
```

**The process that how we can call action from our React js**
_app.js_

```js
import { ADD_TO_CART } from "./redux/actions"; // action from action.js
import { useDispatch } from "react-redux"; //useDispatch from react-redux

function App() {
  const dispatch = useDispatch();
  const product = {
    name: "T-Shirt",
    price: "50",
  };
  return (
    <div>
      // Dispatch ADD_TO_CART action with payload
      <button onClick={() => dispatch(ADD_TO_CART(product))}>Click</button>
    </div>
  );
}

export default App;
```

### Reducer

- Reducer for handle data for redux store
- Update data in store
- Rules
  - Need root Reducer
  - Reducer must return some value
  - Reducer must have some initial value

**The example that how reducer looks like**
<br/>
_reducer.js_

```js
export const cartData = (payload = [], action) => {
  // payload : data that are come from action
  // action : action that are come from action with type property
  if (action === "ADD_TO_CART") {
    return payload;
  }
  return payload;
};
```

**Root Reducer file combine all the reducer. And this Root Reducer is use in Redux Store**
_rootReducer.js_

```js
import { combineReducers } from "redux";
import { cartData } from "./reducer";

export default combineReducers({
  // Here all the reducer will past
  cartData,
});
```

**And finally in store.js the rootReducer will used**
_store.js_

```js
import { createStore } from "redux";
import rootReducer from "./rootReducer";

const store = createStore(rootReducer);

export default store;
```
