import { useSelector } from 'react-redux';
import ContactsItem from '../../components/ContactsList/ContactsItem/ContactsItem';
import { selectFilteredContacts } from '../../redux/selectors';
import { Grid, Typography } from '@mui/material';

const ContactsList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <>
      {filteredContacts?.length > 0 ? (
        <Grid container spacing={2}>
          {filteredContacts.map(({ id, name, number }) => (
            <Grid item xs={12} key={id}>
              <ContactsItem id={id} name={name} number={number} type="button" />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography variant="body1">Contacts not found</Typography>
      )}
    </>
  );
};

export default ContactsList;
