import { useAuth } from '../../hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { Typography, Button, Box } from '@mui/material';

const UserMenu = () => {
  const dispatch = useDispatch();

  const {
    user: { email },
  } = useAuth();

  return (
    <Box
      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <Typography variant="body1" gutterBottom sx={{ marginRight: '8px' }}>
        {email}
      </Typography>
      <Button variant="outlined" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </Box>
  );
};

export default UserMenu;
