import PropTypes from "prop-types";
import Icon from "./Icon";

const Task = ({ task, columnTitle, onDragStart }) => {
	return (
		<div
			className={`task ${columnTitle === "Выполнена" ? "is-done" : ""}`}
			draggable
			onDragStart={(e) => onDragStart(e, task)}
		>
			<div className="task__info">
				<div className="task__holders">
					<img className="task__img" src="/src/assets/img/img-profile-pic-1.png" alt="profile-pic-1" />
					<img className="task__img" src="/src/assets/img/img-profile-pic-2.png" alt="profile-pic-2" />
				</div>

				<span className="task__priority-icon">
					<Icon id="icon-priority" className="icon"/>
				</span>
			</div>

			<div className="task__desc">
				<a className="task__link" href="#">
					<p className="task__text">
						<span className="task__id">#20413: </span>
						<span className="task__title">{task}</span>
					</p>
				</a>
			</div>
		</div>
	);
}

Task.propTypes = {
	task: PropTypes.string.isRequired,
	columnTitle: PropTypes.string.isRequired,
	onDragStart: PropTypes.func.isRequired,
};
  
export default Task;
  