import "./ListItem.css";
export default function ListItem(props) {
  const { todo, handleDelete } = props;
  return (
    <div className="listitem">
      <h5 className="listview">{todo}</h5>
      <button onClick={() => handleDelete(todo)} className="delete">
        <i class="fas fa-trash-alt"></i>
      </button>
    </div>
  );
}
