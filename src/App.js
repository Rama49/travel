import Home from './Composants/Home/Home';
import Navbar from './Composants/Navbar/Navbar';
import Main from './Composants/Main/Main';
import Footer from './Composants/Footer/Footer';
import './app.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">  
        < Navbar />
        < Home />
        < Main />
        < Footer />
    </div>
  );
}

export default App;
