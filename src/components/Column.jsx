import PropTypes from "prop-types";
import Task from "./Task";
import Icon from "./Icon";

const Column = ({ column, onDragOver, onDrop, deleteColumn, addTask, onDragStart }) => {
  return (
    <div
      className="column"
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      <div className="column__header">
        <div className="column__label">
          <span className="column__icon">
            {column.icon ? <Icon id={column.icon} className="icon"/> : <Icon id="icon-pin" className="icon"/>}
          </span>
     
          <h2 className="column__title">{column.title}</h2>
        </div>

        <div className="column__control">
          <button className="column__btn">
            <span className="column__btn-icon">
              <Icon id="icon-pen" className="icon"/>
            </span>
          </button>

          <button className="column__btn" onClick={() => deleteColumn(column.id)}>
            <span className="column__btn-icon">
              <Icon id="icon-bin" className="icon"/>
            </span>
          </button>
        </div>
      </div>
      
      <div className="column__content">
        {column.tasks.map(task => (
          <Task
            key={task}
            task={task}
            columnIcon={column.icon}
            columnTitle={column.title}
            onDragStart={onDragStart}
          />
        ))}
      </div>
      
      <button className="column__btn-add" onClick={() => addTask(column.id)}>
        <span className="column__btn-add-icon">
          <Icon id="icon-plus" className="icon"/>
        </span>
      </button>
    </div>
  );
}

Column.propTypes = {
  column: PropTypes.shape({
    id: PropTypes.number.isRequired,
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tasks: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  onDragOver: PropTypes.func.isRequired,
  onDrop: PropTypes.func.isRequired,
  deleteColumn: PropTypes.func.isRequired,
  addTask: PropTypes.func.isRequired,
  onDragStart: PropTypes.func.isRequired,
};

export default Column;
