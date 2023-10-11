import {
  Checkbox,
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  Divider,
  Box,
} from '@mui/material';
import { useSelector } from 'react-redux';
import TaskForm from '../components/TaskForm';
import Header from '../components/Header';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import IconButton from '@mui/material/IconButton';
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
                <List>
                  {tasks.map((task) => (
                    <Box sx={{ width: '100%' }} key={task.id}>
                      <ListItem
                        sx={{
                          width: '100%',
                        }}>
                        <Grid item xs={1} md={1} lg={1}>
                          <Checkbox />
                        </Grid>
                        <Grid item xs={12} md={12} lg={12}>
                          <div>{task.description}</div>
                        </Grid>
                        <Grid item xs={2} md={2} lg={2}>
                          <IconButton edge="end">
                            <DeleteOutlineOutlinedIcon sx={{ color: 'grey' }} />
                          </IconButton>
                          <IconButton edge="end">
                            <DriveFileRenameOutlineOutlinedIcon />
                          </IconButton>
                        </Grid>
                      </ListItem>
                      <Divider />
                    </Box>
                  ))}
                </List>
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
