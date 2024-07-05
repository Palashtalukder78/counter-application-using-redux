import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../redux/counter/actions";


const Counter = () => {
  const count = useSelector((state) => state.value);
  const dispatch = useDispatch();

    const incremenHandler = value =>{
        dispatch(increment(value))
    }
    const decrementHandler = value =>{
        dispatch(decrement(value))
    }
  return (
    <div>
      <div className="mb-4">
        <div className="max-w-md mx-auto mt-10 space-y-5">
          <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
            <div className="text-2xl font-semibold">{count}</div>
            <div className="flex space-x-3">
              <button
                className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
                onClick={() => incremenHandler(10)}
              >
                Increment
              </button>
              <button
                className="bg-red-400 text-white px-3 py-2 rounded shadow"
                onClick={() => decrementHandler(10)}
              >
                Decrement
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
