import { TaskItem } from './types';
export const getFilteredTasks = (tasks: TaskItem[], isHideActive: boolean) => {
  if (isHideActive) {
    return tasks.filter((task) => task.checked === false);
  }
  return tasks;
};
