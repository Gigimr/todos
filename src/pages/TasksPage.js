import { Grid, Paper, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import TaskForm from '../components/TaskForm';
import Header from '../components/Header';
import TaskList from '../components/TaskList';

function Tasks() {
  const tasks = useSelector((state) => state.tasks);

  return (
    <>
      <Grid alignItems="center" justifyContent="center" container spacing={0}>
        <Header />
        <Grid item xs={12} md={8} lg={8}>
          <TaskForm />
        </Grid>
        <Grid
          sx={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '10px',
          }}
          item
          xs={12}
          md={8}
          lg={8}>
          <Grid item xs={12} md={10} lg={10}>
            <Paper
              sx={{
                minHeight: '400px',
                width: '100%',
              }}
              elevation={3}>
              {tasks.length > 0 ? (
                <TaskList />
              ) : (
                <Typography
                  variant="h5"
                  textAlign="center"
                  paddingTop="150px"
                  color="gray">
                  No tasks added
                </Typography>
              )}
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Tasks;
