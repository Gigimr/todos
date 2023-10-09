import './App.css';
import { Box } from '@mui/material';
import Tasks from './components/Tasks';
import TaskForm from './components/TaskForm';

function App() {
  return (
    <Box
      sx={{
        height: '100%',
        width: '100%',
        display: 'inline-block',
      }}>
      <Tasks />
      <TaskForm />
    </Box>
  );
}

export default App;
//
