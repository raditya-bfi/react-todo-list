import Task from '~/components/Task';
import useCustom from './hooks';

const Main = () => {
  const { data, methods, states } = useCustom();
  return (
    <div className='max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300'>
      <div className='flex flex-row justify-between items-center'>
        <div>
          <h1 className='text-xs text-gray-400 font-bold'>GET STARTED</h1>
        </div>
        <div className='inline-flex space-x-2 items-center'>
          <button onClick={(_e) => methods.handleActionHide(states.isHideActive)}>
            <p className='text-xs text-yellow-700 font-extrabold'>
              {states.isHideActive ? 'Show' : 'Hide'} completed tasks
            </p>
          </button>
        </div>
      </div>
      <div id='tasks' className='my-5'>
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
