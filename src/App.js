import Button from "./Button";
import Movie from "./components/Movie";
import styles from "./App.module.css";
import {useState, useEffect} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";


/*function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
 
  useEffect(() => {console.log("i run only once");}, []);
  useEffect(() => {console.log("i run when 'keyword' changes");}, [keyword]);
  useEffect(() => {console.log("i run when 'counter' changes");}, [counter]);
  useEffect(() => {console.log("i run when 'keyword and counter' changes");}, [keyword, counter]);
  return (
    <div>
      <input type="text" placeholder="Search here...." onChange={onChange}/>
      <h1 className={styles.title}>Counter {counter}</h1>
      <Button onClick={onClick} text={"Continue"}/>
    </div>
  );
}*/

/*function Hello() {
  useEffect(() => {
    console.log("Created :)");
    return () => console.log("Destroyed :(");
  }, []);
  return <h1>Hello</h1>;
}*/

/*function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => {
    setShowing((prev) => !prev);
  }
  return (
    <div>
      {showing ? <Hello/> : null}
      <button onClick={onClick}>{showing ? "hide" : "show"}</button>
    </div>
  )
}*/

/*function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if(todo === "") {
      return;
    }
    setTodos(currentArray => [todo, ...currentArray]);
    setTodo("");   
  };
  console.log(todos);
  return (
    <div>
      <h1>My To dos ({todos.length})</h1>
      <form onSubmit={onSubmit}>
        <input type="text" onChange={onChange} value={todo} placeholder="Write your to do"/>
        <button>Add to do</button>
      </form>
      <hr/>
      <ul>
        {todos.map((item, index) => (<li key={index}>{item}</li>))}
      </ul>
    </div>
  );
}*/

/*function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
    });
  }, []);
  return (
    <div>
      <h1>The Coins! ({coins.length})</h1>
      {loading ? <strong>Loading.....</strong> : null}
      <ul>
        {coins.map((item, index) => (<li key={index}>{item.name} ({item.symbol}) : ${item.quotes.USD.price}</li>))}
      </ul>
    </div>
  )
}*/

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/hello" element={<h1>Hello</h1>}></Route>
        <Route path="/movie/:id" element={<Detail/>}></Route>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
    </Router>
  );  
}

export default App;
