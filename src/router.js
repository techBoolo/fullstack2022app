import { Routes, Route } from 'react-router-dom'

import Links from './links.js'
import Unicafe from './components/Unicafe/'

const Router = (props) => {

  return (
    <Routes>
      <Route path='/' element={<Links />}>
        <Route index element={<div>select an app</div>} />
        <Route path='unicafe' element={<Unicafe />} />
      </Route>
    </Routes>
  );
};

export default Router
