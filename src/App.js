import Router from './router.js'
import Navbar from './components/Navbar/'

import CssBaseline from '@mui/material/CssBaseline'

const App = () => {
  return (
    <>
      <CssBaseline />
      <Navbar />

      <Router />
    </>
  );
}

export default App;
