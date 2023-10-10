import './App.css';
import { Box } from '@mui/material';
import TasksPage from './pages/TasksPage';

function App() {
  return (
    <Box
      sx={{
        height: '100%',
        width: '100%',
        display: 'inline-block',
      }}>
      <TasksPage />
    </Box>
  );
}

export default App;
//
