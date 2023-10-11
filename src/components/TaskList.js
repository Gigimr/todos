import { Grid } from '@mui/material';
import { useSelector } from 'react-redux';

function TaskList() {
  const tasks = useSelector((state) => state.tasks);

  return (
    <Grid item xs={12} md={8} lg={8}>
      {tasks.map((task) => (
        <div key={task.id}>
          <p>{task.description}</p>{' '}
        </div>
      ))}
    </Grid>
  );
}

export default TaskList;
