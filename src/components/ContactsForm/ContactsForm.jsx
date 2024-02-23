import { Button, TextField, Box, Typography, Grid } from '@mui/material';
import { nanoid } from '@reduxjs/toolkit';
import { useMemo, useState } from 'react';

const initialValues = {
  name: '',
  number: '',
};

const ContactsForm = ({ onSubmit }) => {
  const [form, setForm] = useState({ ...initialValues });

  const nameId = useMemo(() => nanoid(), []);
  const numberId = useMemo(() => nanoid(), []);

  const handleChange = event => {
    const { name, value } = event.currentTarget;

    setForm(prevForm => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(form);

    setForm({ ...initialValues });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        '& .MuiTextField-root': { marginBottom: '1rem' },
      }}
    >
      <Typography variant="h6" gutterBottom>
      Add a new contact here:
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            label="Name"
            size="small"
            type="text"
            id={nameId}
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            label="Phone number"
            size="small"
            type="tel"
            id={numberId}
            name="number"
            value={form.number}
            onChange={handleChange}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" size="small" type="submit" fullWidth>
            Add contact
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactsForm;
