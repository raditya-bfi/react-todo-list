import { useCallback, useMemo, useState } from 'react';
import dummyData from './dummy.json';
import { getFilteredTasks } from './helper';
import { TaskItem } from './types';

const useCustom = () => {
  const [isHideActive, setIsHideActive] = useState<boolean>(false);
  const [tasks, setTasks] = useState<TaskItem[]>(dummyData.tasks);

  const handleActionHide = (isHideActive: boolean) => {
    setIsHideActive(!isHideActive);
  };

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>, id: number) => {
      const newTasks = tasks.map((task) => {
        if (task.id === id) {
          return { ...task, checked: event.target.checked };
        }
        return task;
      });
      setTasks(newTasks);
    },
    [tasks],
  );

  const taskList = useMemo(() => {
    return getFilteredTasks(tasks, isHideActive);
  }, [tasks, isHideActive]);

  return {
    data: {
      taskList,
    },
    methods: {
      handleActionHide,
      handleChange,
    },
    states: {
      isHideActive,
      tasks,
    },
  };
};

export default useCustom;
