import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import './Home.css'; 

function Home() {
  const { state, dispatch } = useContext(GlobalContext);

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to Our App</h1>
        <p>Your gateway to a seamless experience.</p>
      </header>
      <main className="home-main">
        <div className="counter">
          <p>Current Count: {state.count}</p>
          <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
          <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
        </div>
      </main>
    </div>
  );
}

export default Home;
