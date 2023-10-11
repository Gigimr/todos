import { Box, Input, Button, Grid } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../features/tasks/taskSlice';
import { v4 as uuid } from 'uuid';

function TaskForm() {
  const [task, setTask] = useState({
    description: '',
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addTask({
        ...task,
        id: uuid(),
      })
    );
    setTask({ description: '' });
  };

  const submitOnEnter = (e) => {
    if (e.keyCode === 13) {
      handleSubmit(e);
    }
  };
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
      <Grid item xs={8} md={8} lg={8}>
        <Input
          name="description"
          type="text"
          placeholder=" Add a new task..."
          value={task.description}
          onChange={handleChange}
          onKeyDown={submitOnEnter}
          sx={{
            backgroundColor: 'white',
            borderRadius: '2',
            height: '3rem',
            width: '100%',
            fontSize: '25px',
          }}
        />
      </Grid>
      <Grid item xs={2} md={2} lg={2}>
        <Button
          onClick={handleSubmit}
          variant="contained"
          size="large"
          style={{
            borderRadius: '0',
            paddingLeft: '20px',
            width: '100%',
            backgroundColor: 'white',
            color: 'grey',
            height: '3rem',
          }}>
          ADD
        </Button>
      </Grid>
    </Box>
  );
}

export default TaskForm;
