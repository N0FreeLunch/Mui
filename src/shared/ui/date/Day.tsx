import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const dayList = [...Array(31).keys()].map(e => String(e+1));

export default function Month() {
  return (
    <Autocomplete
      disablePortal
      id="Month-selector"
      options={dayList}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Day" />}
    />
  );
}
