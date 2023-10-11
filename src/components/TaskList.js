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
import { useSelector } from 'react-redux';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
function TaskList() {
  const tasks = useSelector((state) => state.tasks);

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
              color: 'grey',
              paddingLeft: '20px',
              height: '3rem',
            }}>
            {tasks.length} Tasks left
          </Typography>
        </Grid>
        <Grid item xs={3} md={3} lg={2}>
          <Button
            size="large"
            style={{
              float: 'right',
              borderRadius: '0',
              backgroundColor: 'white',
              color: 'grey',
            }}>
            Clear all
          </Button>
        </Grid>
      </Grid>
      <Divider />

      {tasks.map((task) => (
        <Box sx={{ width: '100%' }} key={task.id}>
          <ListItem
            sx={{
              width: '100%',
            }}>
            <Grid item xs={1} md={1} lg={1}>
              <Checkbox />
            </Grid>
            <Grid item xs={9} md={9} lg={10}>
              <div>{task.description}</div>
            </Grid>
            <Grid paddingLeft="20px" item xs={3} md={3} lg={2}>
              <IconButton edge="end" sx={{ float: 'right' }}>
                <DeleteOutlineOutlinedIcon sx={{ color: 'grey' }} />
              </IconButton>
              <IconButton edge="end" sx={{ float: 'right' }}>
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
