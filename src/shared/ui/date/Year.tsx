import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const currentYear = new Date().getFullYear();
const yearList = [...Array(100).keys()].map(e => {
	return String(currentYear-e);
});

export default function Year() {
  return (
    <Autocomplete
      disablePortal
      id="year-selector"
      options={yearList}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Year" />}
    />
  );
}
