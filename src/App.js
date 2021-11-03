import "./App.css";
import { useState } from "react";
import styles from "./styles.module.css";
import ListItem from "./components/LisItem";


function App() {
  const [todo, settodo] = useState("")
  const [todos, settodos] = useState([])
  console.log(todos);
  const handleSubmit =() => {
    settodos([...todos, todo])
  }
  const handleDelete = (todo) =>{
    settodos(todos.filter(item => (item !== todo)))
  }
  return (
    <div className={styles.contentWrapper}>
      <div>
        <div className={styles.title}><h1>To-do-App!</h1></div>
        <div className={styles.addNew}><h3>Add New To-Do</h3></div>
        <div className={styles.textBtn}>
        <div>
        {todos.map(todo => (
        <ListItem key={todo} todo={todo} handleDelete={handleDelete}/>
        ))}
          <div><input onChange={(e) => settodo(e.target.value)} className={styles.textBox} type="text"></input></div>
        </div>
        <div><button onClick={handleSubmit} className={styles.btn}>ADD</button></div>
        </div>
      </div>
      <div className={styles.me}>By Dilshad :)</div>
    </div>
    
  );
}

export default App;
