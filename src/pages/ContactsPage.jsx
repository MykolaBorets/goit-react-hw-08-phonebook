import { Container } from '@mui/material';
import Phonebook from '../components/Phonebook/Phonebook';

const ContactsPage = () => {
    return (
        <Container maxWidth="md" sx={{ mt: 4 }}>
            <Phonebook />
        </Container>
    );
};

export default ContactsPage;
