import Task from './Task';
import { useGetTasksQuery } from '../redux/api';

const Tasks = () => {
  const { data } = useGetTasksQuery();

  return (
    <div data-testid='task-list'>
      {data?.map((task) => (
        <Task key={task.id} {...task} />
      ))}
    </div>
  );
};

export default Tasks;
