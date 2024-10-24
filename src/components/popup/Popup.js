import "./Popup.css";
import ReactDOM from "react-dom";

const PopupOverlay = ({ props }) => {
  const content = (
    <div className="popup-wrapper">
      <div className="popup-back" onClick={props.closePopup}></div>
      <div className="popup">
        <div className="popup-header">
          <h2>Add Task</h2>
        </div>
        <div className="popup-container">
          <div className="popup-container__input">
            <textarea
              rows="6"
              wrap="soft"
              value={props.task}
              onChange={props.valueChanged}
            />
          </div>
          <div className="popup-container__button">
            <button onClick={props.addHandler}>Add</button>
          </div>
        </div>
      </div>
    </div>
  );
  return ReactDOM.createPortal(content, document.getElementById("modal"));
};

const Popup = (props) => {
  return props.popupState && <PopupOverlay props={{ ...props }} />;
};

export default Popup;
