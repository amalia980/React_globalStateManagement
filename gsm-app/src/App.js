import './App.css';
import ChildOne from './components/ChildOne';
import { useState, useContext } from 'react';
import { BasketContext } from './context/basketContext';
import { UserContext } from './context/userContext';

function App() {

  const { basket, setBasket } = useContext(BasketContext);

  const userContext = useContext(UserContext);
  console.log(userContext);

  console.log(basket);

  const [message, setMessage] = useState("Hello world");

  const logInUser = () => {
    userContext.setUser({ username: "Amy" });
    userContext.setLoggedIn(true);
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <ChildOne message={message} />
        <h1>Context time</h1>
        <h2>Basket context</h2>
        <button onClick={() => setBasket([...basket, { title: "Orange" }])}>
          Add Item
        </button>
        {basket.map((item, index) => (
          <p key={index}>{item.title}</p>
        ))}
        <h2>User Context</h2>
        <button onClick={logInUser}>Log in user</button>
        {userContext.loggedIn && <p>Welcome {userContext.user.username}</p>}
      </header>
    </div>
  );
}

export default App;
