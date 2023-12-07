import { useDispatch, useSelector } from 'react-redux';
import { add, substract } from '../slices/exampleSlice';

const Counter = () => {
  const dispatch = useDispatch();
  const { counter } = useSelector((state) => state.example);

  function addToCounter() {
    dispatch(add());
  }

  function substractToCounter() {
    dispatch(substract());
  }
  return (
    <div id="counter">
      <h2>{counter}</h2>
      <button type="button" onClick={addToCounter}>Increase</button>
      <button type="button" onClick={substractToCounter}>Decrease</button>
    </div>
  );
};

export default Counter;
