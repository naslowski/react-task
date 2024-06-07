import PropTypes from "prop-types";

const Popup = ({ title, value, onChange, onSave, onClose }) => {
    return (
      <div className="popup">
        <div className="popup__inner">
          <h3>{title}</h3>

          <div className="popup__content">
            <label>Заголовок</label>
            <input
              type="text"
              value={value}
              onChange={onChange}
            />
          </div>

          <div className="popup__control">
            <button className="btn" onClick={onSave}>Добавить</button>
            <button className="btn" onClick={onClose}>Отменить</button>
          </div>
        </div>
      </div>
    );
  }

  Popup.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
  };
  
  export default Popup;
  