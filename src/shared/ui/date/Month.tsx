import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const monthList = [...Array(12).keys()].map(e => String(e+1));

export default function Month() {
  return (
    <Autocomplete
      disablePortal
      id="Month-selector"
      options={monthList}
      renderInput={(params) => <TextField {...params} label="Month" />}
    />
  );
}
