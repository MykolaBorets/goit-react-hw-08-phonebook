import { useAuth } from '../../hooks/useAuth';
import { NavLink } from 'react-router-dom';
import { List, ListItem, Typography } from '@mui/material';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

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
              to="/"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              Home
            </NavLink>
          </Typography>
        </ListItem>

        {isLoggedIn && (
          <ListItem component="li">
            <Typography variant="body1">
              <NavLink
                to="/contacts"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                Contacts
              </NavLink>
            </Typography>
          </ListItem>
        )}
      </List>
    </nav>
  );
};

export default Navigation;
