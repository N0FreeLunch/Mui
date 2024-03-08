import { Grid } from '@mui/material';
import { Year, Month, Day } from "@src/shared/ui/date";

const BirthDay = () => {
  return (
    <Grid container spacing={1} >
      <Grid item xs={12} md={4}><Year/></Grid>
      <Grid item xs={6} md={4}><Month/></Grid>
      <Grid item xs={6} md={4}><Day/></Grid>
    </Grid>
  );
}

export default BirthDay;
