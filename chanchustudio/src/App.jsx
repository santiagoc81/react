import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CartContex';
import Cart from './components/Cart/Cart'; 
import Checkout from './components/Checkout/Checkout'; 


function App() {


  return (
    <div className="App">
        <BrowserRouter>
        <CartProvider>
            <NavBar />
            <Routes>
              <Route path='/' element={<ItemListContainer />} />
              <Route path='/category/:categoryId' element={<ItemListContainer />} />
              <Route path='/item/:itemId' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/checkout' element={<Checkout />} />
              <Route path='*' element={<h1>404 Not found</h1>} />
            </Routes>
          </CartProvider>
        </BrowserRouter>
    </div>
  );
}

export default App;
