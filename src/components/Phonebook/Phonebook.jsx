import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { Card, Container, Typography } from '@mui/material';

import { setFilter } from '../../redux/contactsSlice';
import ContactsForm from '../ContactsForm/ContactsForm';
import Filter from '../Filter/Filter';
import ContactsList from '../../components/ContactsList/ContactsList';
import { addContact, fetchContacts } from '../../redux/operations';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from '../../redux/selectors';

import phonebookImage from '../../images/phonebook.png';

const Phonebook = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleSubmit = newContact => {
    const { name, number } = newContact;

    const inContacts = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (inContacts) {
      return alert(`${inContacts.name} is already in contacts`);
    }
    const id = nanoid();
    dispatch(addContact({ id, name, number }));
  };

  const handleFilterChange = event => {
    const value = event.currentTarget.value;
    dispatch(setFilter({ value }));
  };

  return (
    <Container maxWidth="sm">
      <Card
        variant="outlined"
        sx={{
          my: 2,
          p: 2,
          bgcolor: 'whitesmoke',
          borderRadius: 2,
        }}
      >
        {/* Заміна тексту на зображення */}
        <img
          src={phonebookImage}
          alt="Phonebook"
          style={{ width: '25%', display: 'block', margin: '0 auto' }}
        />
        <ContactsForm onSubmit={handleSubmit} />
      </Card>

      <Card
        variant="outlined"
        sx={{
          my: 2,
          p: 2,
          bgcolor: 'whitesmoke',
          borderRadius: '8px',
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Your Contacts
        </Typography>
        {isLoading && !error && (
          <Typography align="center">
            Please, wait! Your request is in progress...
          </Typography>
        )}
        {contacts?.length > 0 ? (
          <>
            <Filter onChange={handleFilterChange} />
            <ContactsList />
          </>
        ) : (
          <Typography align="center">There's nothing here</Typography>
        )}
      </Card>
    </Container>
  );
};

export default Phonebook;
