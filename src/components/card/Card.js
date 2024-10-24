import "./Card.css";

const Card = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <h3 className={`${props.isDone && "text-done"}`}>{props.title}</h3>
      </div>
      <div className="card-actions">
        <button id={`${[props.id]}`} onClick={props.doneHandler}>
          done
        </button>
        <button id={`${[props.id]}`} onClick={props.deleteHandler}>
          delete
        </button>
      </div>
    </div>
  );
};

export default Card;
