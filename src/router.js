import { Routes, Route } from 'react-router-dom'

import Links from './links.js'
import Unicafe from './components/Unicafe/'
import Anecdote from './components/Anecdote/'
import Phonebook from './components/Phonebook/'
import Country from './components/Country/'

const Router = (props) => {

  return (
    <Routes>
      <Route path='/' element={<Links />}>
        <Route index element={<div>select an app</div>} />
        <Route path='unicafe' element={<Unicafe />} />
        <Route path='anecdote' element={<Anecdote />} />
        <Route path='phonebook' element={<Phonebook />} />
        <Route path='country' element={<Country />} />
      </Route>
    </Routes>
  );
};

export default Router
