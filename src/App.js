import './App.css';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import ComprarRp from './components/CompraRp';
import DonarRp from './components/DonarRp';
import store from './redux/store';

import { Provider } from 'react-redux';
import ContadorRp from './components/ContadorRp';

function App() {

  return (
    <>
      <Provider store={store}>
        <Router>
            <div className="App">
                <div className='menu'>
                  
                  <Link to="/" className='menu-item' >Inicio</Link>
                  <Link to="/proyects" className='menu-item' >Proyectos</Link>
                  <Link to="/contact" className='menu-item' >Galeria</Link>

                </div>
                  
            
            
            <Routes>
                  <Route exact path='/' element={< Home />}></Route>
                  <Route exact path='/proyects' element={< Proyects />}></Route>
            </Routes>

            <Footer></Footer>
            
            
            </div>
        </Router>
        </Provider>
    </>
  );
}

export default App;
