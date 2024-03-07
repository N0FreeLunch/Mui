import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const currentYear = new Date().getFullYear();
const yearList = [...Array(100).keys()].map(e => {
	return String(currentYear-e);
});

export default function Year({count = 100}) {
  const displayYearList = yearList.slice(0, count-1);
  return (
    <Autocomplete
      disablePortal
      id="year-selector"
      options={displayYearList}
      renderInput={(params) => <TextField {...params} label="Year" />}
    />
  );
}
