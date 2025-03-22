import { Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
      }}
    >
      <Typography variant="h1" sx={{ fontWeight: 700, mb: 2 }}>
        404
      </Typography>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Oops! Page Not Found
      </Typography>
      <Button variant="contained" component={Link} to="/">
        Go Back Home
      </Button>
    </Box>
  );
};

export default NotFound;