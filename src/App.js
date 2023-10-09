import './App.css';
import { Box } from '@mui/material';
import Tasks from './components/Tasks';

function App() {
  return (
    <Box
      sx={{
        height: '100%',
        width: '100%',
        display: 'inline-block',
      }}>
      <Tasks />
    </Box>
  );
}

export default App;
//
