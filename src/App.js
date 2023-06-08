
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Navbar from './Components/Navbar';
import { Provider } from 'react-redux';
import store from './store/store';
import Product from './pages/Products/id';
import Footer from './Components/Footer';

function App() {
  return (
    <div className='App bg-slate-300 '>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <main>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
            <Route path="/Product/:id" element={<Product />} />
          </Routes>
          </main>
          <Footer/>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
