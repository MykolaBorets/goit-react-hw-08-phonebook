import { NavLink } from 'react-router-dom';
import { List, ListItem, Typography } from '@mui/material';

const AuthNav = () => {
  return (
    <nav>
      <List
        component="ul"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 0,
        }}
      >
        <ListItem component="li" sx={{ mr: 2 }}>
          <Typography variant="body1">
            <NavLink
              to="/register"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              Register
            </NavLink>
          </Typography>
        </ListItem>
        <ListItem component="li">
          <Typography variant="body1">
            <NavLink
              to="/login"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              Login
            </NavLink>
          </Typography>
        </ListItem>
      </List>
    </nav>
  );
};

export default AuthNav;
