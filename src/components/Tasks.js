import { Box, Container, Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import TaskForm from './TaskForm';
function Tasks() {
  const containerStyle = {
    backgroundImage:
      'linear-gradient(53deg, rgba(78,43,233,1) 20%, rgba(121,9,111,1) 100%)',
    width: '100%',
    position: 'absolute',
    height: '200px',
    zIndex: '-1',
  };

  const tasks = useSelector((state) => state.tasks);

  return (
    <>
      <Grid alignItems="center" justifyContent="center" container spacing={0}>
        {/* header */}
        <Grid item xs={12} md={8} lg={8}>
          <Box sx={{ position: 'relative' }}>
            <Container sx={containerStyle}></Container>
            <Typography
              variant="h3"
              textAlign="center"
              paddingTop="30px"
              color="white">
              My Tasks
            </Typography>
          </Box>
        </Grid>
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
