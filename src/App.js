import './App.css';
import './index.css';
import Klogo from './components/KLogo';
import ButtonsMenu from './components/ButtonsMenu';
import {BrowserRouter} from 'react-router-dom'
import Router from './Router'


function App() {

  return (
    <>
      <BrowserRouter>

        <Router />
      </BrowserRouter>
    </>
   
  );
}

export default App;
