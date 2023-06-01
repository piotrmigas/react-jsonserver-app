import { useSelector } from 'react-redux';
import AddTask from '../components/AddTask';
import Tasks from '../components/Tasks';
import { selectToggleTask } from '../redux/taskSlice';

const Home = () => {
  const showAddTask = useSelector(selectToggleTask);

  return (
    <>
      {showAddTask && <AddTask />}
      <Tasks />
    </>
  );
};

export default Home;
