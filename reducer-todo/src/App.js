import React from 'react';
import reducer from './reducer/reducer'
import initialState from './reducer/reducer'
import TodoContainer from './components/TodoContainer'

function App() {
  console.log(reducer);
  console.log(initialState);
  return (
    <div className="App">
      <TodoContainer />
    </div>
  );
}

export default App;
