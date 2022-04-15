import { createTheme, ThemeProvider } from '@mui/material';
import Routes from './Routes';
import './styles.css';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
