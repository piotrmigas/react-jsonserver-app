import { useState, SyntheticEvent } from 'react';
import { useAddTaskMutation } from '../redux/api';

const AddTask = () => {
  const [addTask] = useAddTaskMutation();
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (!text) {
      alert('Please add a task');
      return;
    }
    addTask({ text, day, reminder });
    setText('');
    setDay('');
    setReminder(false);
  };

  return (
    <form onSubmit={handleSubmit} className='add-form'>
      <div className='form-control'>
        <label>Task</label>
        <input value={text} onChange={(e) => setText(e.target.value)} placeholder='Add Task' />
      </div>
      <div className='form-control'>
        <label>Day &amp; Time</label>
        <input value={day} onChange={(e) => setDay(e.target.value)} placeholder='Add Day &amp; Time' />
      </div>
      <div className='form-control form-control-check'>
        <label>Set Reminder</label>
        <input type='checkbox' checked={reminder} onChange={(e) => setReminder(e.target.checked)} />
      </div>
      <input type='submit' value='Save Task' className='btn btn-block' />
    </form>
  );
};

export default AddTask;
