import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header'
import Catalogue from './components/Catalogue';

function App() {

  return (
    <div className="App">
      <NavBar/>
      <Header/>
      <Catalogue/>
    </div>
  );
}

export default App;
