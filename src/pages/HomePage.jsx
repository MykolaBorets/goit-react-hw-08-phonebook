import { Box, Typography } from '@mui/material';
import phonebookImage from '../../src/images/phonebook.png';

const HomePage = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                color: 'black',
                textAlign: 'center',
            }}
        >
            <img src={phonebookImage} alt="Phonebook" style={{ width: '50%', marginBottom: '20px' }} />
            <Typography variant="h2" gutterBottom>
                Welcome to Phonebook App
            </Typography>
            <Typography variant="h5">
                Manage your contacts easily with our app!
            </Typography>
        </Box>
    );
};

export default HomePage;

