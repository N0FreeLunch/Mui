import './App.css';
import Routing from '@src/pages/Routing';
import { LocalizationProvider } from '@mui/x-date-pickers';
// If you are using date-fns v3.x, please import the v3 adapter
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3'
import { ja } from 'date-fns/locale';

function App() {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ja}>
        <Routing />
      </LocalizationProvider>
    </>
  )
}

export default App
