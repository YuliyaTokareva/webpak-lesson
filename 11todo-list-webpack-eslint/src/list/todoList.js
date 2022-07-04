import { onCreateTask } from './createTask';
import { onToggleTask } from './updateTask';

export const initTodoListHandlers = () => {
  const createbtnElem = document.querySelector('.create-task-btn');
  createbtnElem.addEventListener('click', onCreateTask);

  const todoListElem = document.querySelector('.list');
  todoListElem.addEventListener('click', onToggleTask);
};
