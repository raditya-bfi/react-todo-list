import { ChevronRightSolid } from '~/assets/svg';

type TaskProps = {
  id: number;
  classname?: string;
  checked: boolean;
  title: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>, id: number) => void;
};

const Task = ({ id, classname, checked, title, onChange }: TaskProps) => {
  return (
    <div
      id='task'
      className={`${classname} flex justify-between items-center border-b border-slate-200 py-3 px-2 border-l-4  border-l-transparent bg-gradient-to-r from-transparent to-transparent hover:from-slate-100 transition ease-linear duration-150`}
    >
      <div className='inline-flex items-center space-x-2'>
        <div>
          <label
            className='relative flex items-center p-3 rounded-full cursor-pointer'
            htmlFor='customStyle'
          >
            <input
              type='checkbox'
              className="before:content[''] peer relative h-8 w-8 cursor-pointer appearance-none rounded-full border border-gray-900/20 bg-gray-900/10 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-green-100 checked:bg-green-100 checked:before:bg-green-100 hover:scale-105 hover:before:opacity-0"
              id='customStyle'
              onChange={(e) => onChange(e, id)}
              checked={checked}
            />
            <span className='absolute text-green-700 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-50'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-3.5 w-3.5'
                viewBox='0 0 20 20'
                fill='currentColor'
                stroke='currentColor'
                strokeWidth='1'
              >
                <path
                  fillRule='evenodd'
                  d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                  clipRule='evenodd'
                ></path>
              </svg>
            </span>
          </label>
        </div>
        <div className={checked ? 'line-through text-gray-400' : 'text-black'}>{title}</div>
      </div>
      {!checked && (
        <div className='flex w-3 h-3 items-center justify-center'>
          <img className='w-auto h-auto' alt={`chevron-right-icon${id}`} src={ChevronRightSolid} />
        </div>
      )}
    </div>
  );
};

export default Task;
