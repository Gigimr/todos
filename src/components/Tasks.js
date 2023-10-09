import { Box, Container, Grid, Typography } from '@mui/material';

function Tasks() {
  const containerStyle = {
    backgroundImage:
      'linear-gradient(53deg, rgba(78,43,233,1) 20%, rgba(121,9,111,1) 100%)',
    width: '100%',
    position: 'absolute',
    height: '200px',
    zIndex: '-1',
  };

  return (
    <>
      <Grid alignItems="center" justifyContent="center" container spacing={0}>
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
      </Grid>
    </>
  );
}

export default Tasks;
