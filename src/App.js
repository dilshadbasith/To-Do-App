import "./App.css";
import { useState } from "react";
import styles from "./styles.module.css";
import ListItem from "./components/LisItem";
import "bootstrap/dist/css/bootstrap.min.css";
import Customnavbar from "./Customnavbar.js";
import Button from "react-bootstrap/Button";

function App() {
  const [todo, settodo] = useState("");
  const [todos, settodos] = useState([]);
  const handleSubmit = () => {
    settodos([...todos, todo]);
  };
  const handleDelete = (todo) => {
    settodos(todos.filter((item) => item !== todo));
  };
  return (
    <div className={styles.contentWrapper}>
      <Customnavbar />
      <div>
        <div className={styles.title}>
          <h1>To-do-App!</h1>
        </div>
        <div className={styles.addNew}>
          <h3>Add New To-Do</h3>
        </div>
        <div className={styles.textBtn}>
          <div>
            {todos.map((todo) => (
              <ListItem key={todo} todo={todo} handleDelete={handleDelete} />
            ))}
            <div>
              <input
                onChange={(e) => settodo(e.target.value)}
                className={styles.textBox}
                type="text"
              ></input>
            </div>
          </div>
          <div>
            <Button
              onClick={handleSubmit}
              className={styles.btn}
              variant="secondary"
            >
              Add
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.me}>By Dilshad 😎</div>
    </div>
  );
}

export default App;
