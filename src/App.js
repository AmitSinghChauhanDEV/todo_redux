import './App.css';
import AddTodo from './components/AddTodo/AddTodo';
import List from './components/List/List';
function App() {
  return (
  <>
     
    <div className="App m-5">
    <h1>TODO LIST</h1>
      <AddTodo />
      <List />
    </div>
  </>
  );
}

export default App;
