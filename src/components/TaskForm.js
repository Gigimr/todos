import { Container } from '@mui/material';

function TaskForm() {
  return (
    <Container sx={{ zIndex: 1000 }}>
      <form>
        <input type="text" placeholder="Add a new task" />
      </form>
    </Container>
  );
}

export default TaskForm;
/**/
