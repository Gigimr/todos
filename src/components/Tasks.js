import { Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import TaskForm from './TaskForm';
import Header from './Header';

function Tasks() {
  const tasks = useSelector((state) => state.tasks);

  return (
    <>
      <Grid alignItems="center" justifyContent="center" container spacing={0}>
        <Header />

        {/* task form */}
        <Grid item xs={12} md={8} lg={8}>
          <TaskForm />
        </Grid>
        {/* task list */}
        <Grid item xs={12} md={8} lg={8}>
          {tasks.map((task) => (
            <div key={task.id}>
              <p>{task.description}</p>{' '}
            </div>
          ))}
        </Grid>
      </Grid>
    </>
  );
}

export default Tasks;
