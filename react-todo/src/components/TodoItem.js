import Card from "./Card";

const TodoItem = (props) => {
  const showModalHandler = () => {
    props.showModal();
  };

  return (
    <Card>
      <h2>Learn React</h2>
      <div className="actions">
        <button className="btn" onClick={showModalHandler}>Delete</button>
      </div>
    </Card>
  );
};

export default TodoItem;
