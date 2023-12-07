import logo from './logo.svg';
import './App.css';
import Exercice1 from './Exercice1.jsx';
import Exercice2 from './Exercice2.jsx';
import Exercice3 from './Exercice3.jsx';
import Api from './ExerciceApiThemoviedb.jsx';
import Table from './Table.jsx';
import { Routes, Route } from 'react-router-dom';
import Graph1 from './Graph.jsx';

export default function App() {

  return (
    <div className='App'>
      <Routes>
        <Route path='/exercice1' element={<Exercice1 />} />
        <Route path='/exercice2' element={<Exercice2 />} />
        <Route path='/exercice3' element={<Exercice3 />} />
        <Route path='/exercice4' element={<Api />} />
        <Route path='/graph' element={<Graph1 />} />
      </Routes>
    </div>
  )

  // return (
  //   <>
  //     <Table />
  //   </>
  // )

  // return (
  //   <>
  //     <Api />
  //   </>
  // );
  
  // return (
  //   <>
  //     <Exercice1 />
  //     <Exercice2 />
  //     <Exercice3 />
  //   </>
  // );
}
