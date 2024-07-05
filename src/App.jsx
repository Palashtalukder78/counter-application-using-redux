import { Provider } from "react-redux";
import "./App.css";
import { store } from "./redux/store";
import Counter from "./components/Counter/Counter";

function App() {
  return (
    <Provider store={store}>
      <div>
        <div>
          <h1 className="text-3xl">Counter application</h1>
        </div>
        <Counter />
      </div>
    </Provider>
  );
}

export default App;
