import logo from './logo.svg';
import './App.css';
import Exercice1 from './Exercice1.jsx';
import Exercice2 from './Exercice2.jsx';
import Exercice3 from './Exercice3.jsx';
import Api from './ExerciceApiThemoviedb.jsx';

export default function App() {

  return (
    <>
      <Api />
    </>
  );
  
  // return (
  //   <>
  //     <Exercice1 />
  //     <Exercice2 />
  //     <Exercice3 />
  //   </>
  // );
}
