import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './App.css';
import Counter, { ADD_TODO, DECREMENT, INCREMENT } from './Counter';

//reducer
function reducer(state = { counter: 10 }, action) {
  //global logic
  switch (action.type) {
    case ADD_TODO:
      return { ...state, datafromComponent: action.payload }
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
}

//store
var store = createStore(reducer, enableDevTools());
function App() {
  return (
    <div>
      <Provider store={store}>
        <Counter />
      </Provider>
    </div>
  );
}


function enableDevTools() {
  return (
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}
export default App;