import {
  Box,
  Button,
  Checkbox,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  Typography,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import {
  clearAll,
  editTask,
  deleteTask,
  toggleTask,
} from '../features/tasks/taskSlice';

function TaskList() {
  const tasks = useSelector((state) => state.tasksState.tasks);

  const dispatch = useDispatch();

  const deleteAllTasks = () => {
    dispatch(clearAll());
  };
  const handleEditTask = (task) => {
    dispatch(editTask(task));
  };
  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };
  const handleToggle = (task) => {
    dispatch(toggleTask(task));
  };
  return (
    <List>
      <Grid
        sx={{
          display: 'flex',
        }}
        item
        xs={12}
        md={12}
        lg={12}>
        <Grid item xs={9} md={9} lg={10}>
          <Typography
            sx={{
              fontSize: '25px',
              color: '#4F5154',
              paddingLeft: '20px',
              height: '3rem',
            }}>
            {tasks.length} Tasks left
          </Typography>
        </Grid>
        <Grid item xs={3} md={3} lg={2}>
          <Button
            onClick={deleteAllTasks}
            size="large"
            style={{
              float: 'right',
              borderRadius: '0',
              backgroundColor: 'white',
              color: '#4F5154',
            }}>
            Clear all
          </Button>
        </Grid>
      </Grid>
      <Divider />

      {tasks.map((task) => (
        <Box
          sx={{
            width: '100%',
            color: task.complete ? '#572be9' : 'black',
          }}
          key={task.id}>
          <ListItem
            sx={{
              width: '100%',
            }}>
            <Grid item xs={1} md={1} lg={1}>
              <Checkbox
                sx={{
                  color: '#572be9',
                  '&.Mui-checked': {
                    color: '#572be9',
                  },
                }}
                onClick={() => handleToggle(task)}
                checked={task.complete}
              />
            </Grid>
            <Grid item xs={9} md={9} lg={10}>
              <div>{task.description}</div>
            </Grid>
            <Grid paddingLeft="20px" item xs={3} md={3} lg={2}>
              <IconButton
                onClick={() => handleDeleteTask(task.id)}
                edge="end"
                sx={{ float: 'right' }}>
                <DeleteOutlineOutlinedIcon sx={{ color: '#4F5154' }} />
              </IconButton>
              <IconButton
                onClick={() => handleEditTask(task)}
                edge="end"
                sx={{ float: 'right', color: '#4F5154' }}>
                <DriveFileRenameOutlineOutlinedIcon />
              </IconButton>
            </Grid>
          </ListItem>
          <Divider />
        </Box>
      ))}
    </List>
  );
}

export default TaskList;
