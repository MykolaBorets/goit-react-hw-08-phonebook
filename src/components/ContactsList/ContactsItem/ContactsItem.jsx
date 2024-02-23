import { useDispatch } from 'react-redux';
import { deleteContact } from '../../../redux/operations';
import { Button, Grid, Typography } from '@mui/material';
import { Delete } from '@mui/icons-material';

const ContactsItem = ({ id, name, number, type }) => {
  const dispatch = useDispatch();

  return (
    <Grid
      item
      xs={12}
      container
      justifyContent="space-between"
      alignItems="center"
      sx={{
        '&:hover': {
          backgroundColor: '#f0f0f0',
        },
        padding: '8px',
      }}
    >
      <Grid item xs={6}>
        <Typography sx={{ fontWeight: 'bold' }}>{name}</Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography sx={{ fontWeight: 'bold' }}>{number}</Typography>
      </Grid>
      <Grid item xs={2}>
        <Button
          variant="contained"
          size="small"
          color="error"
          type={type}
          onClick={() => dispatch(deleteContact({ id }))}
          startIcon={<Delete />}
        >
          Delete
        </Button>
      </Grid>
    </Grid>
  );
};

export default ContactsItem;
