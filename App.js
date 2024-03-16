import './App.css';
import RegisterComponent from './Register/UserInputForm';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TableData from './Table/Table';

function App() {
  return (<BrowserRouter>
  <Routes>
  <Route path='' element={<RegisterComponent/>}></Route>
  <Route path='/register' element={<RegisterComponent/>}></Route>
  <Route path='/table' element={<TableData/>}></Route>
  </Routes>
     </BrowserRouter>
  );
}

export default App;
