import { useState } from "react";
import Column from "./Column";
import Popup from "./Popup";
import Icon from "./Icon";

const TaskManager = () => {
  const [columns, setColumns] = useState([
    { id: 1, icon: "icon-pin", title: "Беклог", tasks: ["Интерфейс динамики кадров на предприятии", "Ежемесячный отчёт для куратора", "Статистика по заявкам"] },
    { id: 2, icon: "icon-play", title: "В работе", tasks: ["Заявки сгруппировать по заявкам", "Ограничения по безопасности"] },
    { id: 3, icon: "icon-check", title: "Выполнена", tasks: ["Проживание: новое поле для тех кто работает", "Рейтинг мастеров в интерфейсе мереджера", "Перенос данных в конце месяца", "Доработки по интерфейсу «Плана»", "Подвешенная заявка", "Интерфейс динамики кадров на предприятии"] },
    { id: 4, icon: "icon-done", title: "Сдана", tasks: ["Временной промежуток при фильтрации", "Статистика по икочникам звонка", "Добавить график к статистике пользователей (количества регистраций)", "Создать тестовую сборку сервиса ( для обработки нововведений )"] },
  ]);

  const [draggedTask, setDraggedTask] = useState(null);
  const [showTaskPopup, setShowTaskPopup] = useState(false);
  const [showColumnPopup, setShowColumnPopup] = useState(false);
  const [newTask, setNewTask] = useState("");
  const [currentColumnId, setCurrentColumnId] = useState(null);
  const [newColumnTitle, setNewColumnTitle] = useState("");

  const addColumn = () => {
    setShowColumnPopup(true);
  };

  const handleAddColumn = () => {
    if (newColumnTitle) {
      const newColumn = {
        id: Date.now(),
        title: newColumnTitle,
        tasks: []
      };
      setColumns([...columns, newColumn]);
      setNewColumnTitle("");
      setShowColumnPopup(false);
    }
  };

  const addTask = (columnId) => {
    setCurrentColumnId(columnId);
    setShowTaskPopup(true);
  };

  const handleAddTask = () => {
    const newColumns = columns.map(column => {
      if (column.id === currentColumnId) {
        return { ...column, tasks: [...column.tasks, newTask] };
      }
      return column;
    });
    setColumns(newColumns);
    setNewTask("");
    setShowTaskPopup(false);
  };

  const deleteColumn = (id) => {
    setColumns(columns.filter(column => column.id !== id));
  };

  const onDragStart = (e, task) => {
    setDraggedTask(task);
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const onDrop = (e, columnId) => {
    const newColumns = columns.map(column => {
      if (column.id === columnId) {
        if (!column.tasks.includes(draggedTask)) {
          return { ...column, tasks: [...column.tasks, draggedTask] };
        }
      } else {
        return { ...column, tasks: column.tasks.filter(task => task !== draggedTask) };
      }
      return column;
    });
    setColumns(newColumns);
    setDraggedTask(null);
  };

  return (
	<div className="board">
		<div className="board__header">
			<div className="board__label">
				<span className="board__icon">
					<Icon id="icon-waves" className="icon"/>
				</span>

				<p className="board__title">Процессы проекта CRM - система</p>
			</div>

			<button className="btn" onClick={addColumn}>Добавить столбец</button>
		</div>

		<div className="board__content">
			{columns.map(column => (
			<Column
				key={column.id}
				column={column}
				onDragOver={onDragOver}
				onDrop={(e) => onDrop(e, column.id)}
				deleteColumn={deleteColumn}
				addTask={addTask}
				onDragStart={onDragStart}
			/>
			))}
		</div>

      {showTaskPopup && (
        <Popup
          title="Добавить таску"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onSave={handleAddTask}
          onClose={() => setShowTaskPopup(false)}
        />
      )}
      
      {showColumnPopup && (
        <Popup
          title="Добавить столбец"
          value={newColumnTitle}
          onChange={(e) => setNewColumnTitle(e.target.value)}
          onSave={handleAddColumn}
          onClose={() => setShowColumnPopup(false)}
        />
      )}
    </div>
  );
}

export default TaskManager;
