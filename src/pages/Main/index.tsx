import Task from '~/components/Task';
import useCustom from './hooks';

const Main = () => {
  const { data, methods, states } = useCustom();
  return (
    <div className='max-w-2xl mx-auto my-10 bg-white p-8'>
      <div className='flex flex-row justify-between items-center'>
        <div>
          <h1 className='text-xs text-blue-gray-900/45 font-medium'>GET STARTED</h1>
        </div>
        <div className='inline-flex space-x-2 items-center'>
          <button onClick={(_e) => methods.handleActionHide(states.isHideActive)}>
            <p className='text-xs text-orange-600 font-extrabold'>
              {states.isHideActive ? 'Show' : 'Hide'} completed tasks
            </p>
          </button>
        </div>
      </div>
      <div id='tasks' className='[&>:not(:last-of-type)]:mb-0.5 my-3'>
        {data.taskList.map((task) => {
          return (
            <Task
              key={`task-list-${task.id}`}
              id={task.id}
              checked={task.checked}
              title={task.title}
              onChange={methods.handleChange}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Main;
