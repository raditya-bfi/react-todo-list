import { Checkmark, ChevronRightSolid } from '~/assets/svg';

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
      className={`${classname} flex justify-between items-center rounded-xl shadow-sm shadow-blue-gray-40 bg-gradient-to-r from-transparent to-transparent hover:from-slate-100 transition ease-linear duration-150`}
    >
      <div className='inline-flex items-center'>
        <div>
          <label
            className='relative flex items-center p-3 rounded-full cursor-pointer'
            htmlFor='customStyle'
          >
            <input
              type='checkbox'
              className="before:content[''] peer relative h-4 w-4 cursor-pointer appearance-none rounded-full border border-blue-gray-400/30 bg-white/10 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-none checked:bg-padua checked:before:bg-padua hover:scale-105 hover:before:opacity-0"
              id='customStyle'
              onChange={(e) => onChange(e, id)}
              checked={checked}
            />
            <span className='absolute text-malachite transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100'>
              <img className='w-2.5 h-2.5' alt={`checkmark-icon${id}`} src={Checkmark} />
            </span>
          </label>
        </div>
        <div
          className={
            checked
              ? 'line-through text-gray-900/70 opacity-55 text-[0.625rem]'
              : 'text-black text-[0.625rem]'
          }
        >
          {title}
        </div>
      </div>
      {!checked && (
        <div className='flex w-2 h-2 items-center justify-center mr-5'>
          <img className='w-auto h-auto' alt={`chevron-right-icon${id}`} src={ChevronRightSolid} />
        </div>
      )}
    </div>
  );
};

export default Task;
