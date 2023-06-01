import { useDeleteTaskMutation, useToggleTaskMutation } from '../redux/api';

const Task = ({ id, reminder, day, text }: Task) => {
  const [deleteTask] = useDeleteTaskMutation();
  const [toggleReminder] = useToggleTaskMutation();

  return (
    <div
      onDoubleClick={() => toggleReminder({ id, reminder, day, text })}
      className={`${reminder ? 'reminder' : ''} task`}
    >
      <div>
        <h3>{text}</h3>
        <p>{day}</p>
      </div>
      <i onClick={() => deleteTask(id)} className='fas fa-times' />
    </div>
  );
};

export default Task;
