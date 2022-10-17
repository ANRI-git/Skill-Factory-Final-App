import { Grid, Typography } from '@mui/material';

export const InfoLayout = ({ children, bg }) => {
  return (
    <Grid
      container
      spacing={0}
      direction='row'
      alignItems='center'
      justifyContent='center'
      sx={{ minHeight: '100vh', padding: 4 }}
    >
      <Grid
        item
        xs={12}
        sm={8}
        md={4}
        className='box-shadow'
        sx={{
          padding: 3,
          borderRadius: 2,
          color: '#fff',
          backgroundImage: `url(${bg})`,
          backgroundPosition: 'center',
          backgroundColor: 'secondary.main',
          backgroundSize: 'cover'
        }}
      >
        {children}
      </Grid>
    </Grid>
  );
};
