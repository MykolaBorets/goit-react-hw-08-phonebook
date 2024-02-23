import AuthNav from '../../components/AuthNav/AuthNav';
import Navigation from '../../components/Navigation/Navigation';
import UserMenu from '../../components/UserMenu/UserMenu';
import { useAuth } from '../../hooks/useAuth';
import { Outlet } from 'react-router-dom';
import { Container, Box } from '@mui/material';

const SharedLayout = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Container maxWidth="lg">
        <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 2 }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </div>
        </Box>
        <main>
          <Box>
            <Outlet />
          </Box>
        </main>
      </Container>
    </>
  );
};

export default SharedLayout;
