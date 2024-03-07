import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function Month({year = 0, month = 0}: {year: number, month: number}) {
  const lastDayOfMonth = (() => {
    if(year === 0 || month === 0) {
      return 31;
    }
    return new Date(year, month+1, 0);
  })();
  const dayList = [...Array(lastDayOfMonth).keys()].map(e => String(e+1));

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
