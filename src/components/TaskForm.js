import { Box, Input, Button } from '@mui/material';

function TaskForm() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
      <Input
        type="text"
        placeholder=" Add a new task..."
        sx={{
          backgroundColor: 'white',
          borderRadius: '2',
          width: '400px',
          height: '3rem',
          fontSize: '25px',
        }}
      />
      <Button
        variant="contained"
        size="large"
        style={{
          borderRadius: '0',
          paddingLeft: '20px',
          backgroundColor: 'white',
          color: 'grey',
          height: '3rem',
        }}>
        ADD
      </Button>
    </Box>
  );
}

export default TaskForm;
