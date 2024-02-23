import { TextField, Box, Typography, Grid } from '@mui/material';

const Filter = ({ onChange }) => {
  return (
    <Box sx={{ marginBottom: '1rem' }}>
      <Typography variant="h6" gutterBottom>
        Search by name:
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            size="small"
            label="Type name"
            type="text"
            name="filter"
            onChange={onChange}
            fullWidth
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Filter;
