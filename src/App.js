import './App.css';
import './index.css';
import {BrowserRouter} from 'react-router-dom'
import Router from './Router'
import SparkleTrail from './components/SparkleTrail'


function App() {

  return (
    <>
      <SparkleTrail />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
   
  );
}

export default App;
