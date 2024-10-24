import Card from "../card/Card";
import "./Board.css";

const Board = (props) => {
  const completedTasks = props.cards.filter((card) => {
    return card.done === true;
  });
  const uncompletedTasks = props.cards.filter((card) => {
    return card.done === false;
  });

  const sortedArray = uncompletedTasks.concat(completedTasks);
  return (
    <div className="board">
      <div className="board-header">
        <h1>Todo List</h1>
      </div>
      <div className="board-cards">
        {sortedArray.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            title={card.title}
            isDone={card.done}
            doneHandler={props.handlers.doneHandler}
            deleteHandler={props.handlers.deleteHandler}
          />
        ))}
      </div>
      <div className="board-add">
        <button>Add</button>
      </div>
    </div>
  );
};

export default Board;
