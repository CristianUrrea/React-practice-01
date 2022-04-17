// import logo from './logo.svg';
import './App.css';
import ContactForm from './components/ContactForm';

import CrudApi from "./components/CrudApi";
import CrudApp from "./components/CrudApp";
import Modals from './components/Modals';
import SelectsNested from './components/SelectsNested';
import SongSearch from "./components/SongSearch";


function App() {
  return (
    <>
      <h1>Ejercicios con React</h1>
      <hr />
      <Modals />
      <hr />
      <ContactForm />
      <hr />
      <SelectsNested />
      <hr />
      <SongSearch />
      <hr />
      <CrudApi />
      <hr />
      <CrudApp />
    </>
  );
}

export default App;
