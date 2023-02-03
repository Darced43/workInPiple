import {Routes, Route} from 'react-router-dom'
import EditPerson from './page/EditPerson/EditPerson';
import Layout from './page/Layout';
import NewPerson from './page/NewPerson/NewPerson';
import Persons from './page/Persons/Persons';

function App() {
  return (
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index path='/' element={<Persons/>}/>
          <Route path='/:id' element={<EditPerson/>}/>
          <Route path='/newPerson' element={<NewPerson/>}/>
        </Route>
      </Routes>
  );
}

export default App;
