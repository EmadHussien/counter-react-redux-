import {useSelector , useDispatch } from 'react-redux';

function App() {
  const counterState = useSelector(state => state.value)
  const toggleState = useSelector(state => state.showCounter)
  const dispatch = useDispatch();

  
  const increase = ()=>{
    const action = {
      type : 'increase',
      payload : 1,
    }
    dispatch(action);
  }
  const decrease = ()=>{
    const action = {
      type : 'decrease',
      payload : 1,
    }
    dispatch(action);

  }
  function toggle() {
    const action = {
      type : 'toggle'
    }
    dispatch(action)
  }
  return (
    <div className='App'>
      <h1>Hello Redux Basic</h1>
      {
         toggleState &&
          <>
            <div className='counter'>Counter: {counterState}</div>
            <div>
              <button className='btn' onClick = {increase} >increase +</button>
              <button className='btn' onClick = {decrease} >decrease -</button>
            </div>
          </>
        
      }
      <div>   
        <button className='btn' onClick = {toggle}>Hide/Show Counter Number</button>
      </div>
    </div>
  );
}
export default App;