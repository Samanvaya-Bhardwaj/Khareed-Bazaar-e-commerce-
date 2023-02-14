import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Product from "./Components/Product";
import Productinfo from "./Components/Productinfo";


function App() {
  return (
    // <div className="App">
    // <Navbar/>
    // <Home/>
    // </div>
    <BrowserRouter>

    <Navbar/>

    <Routes>

      <Route path="/" element={<Home/>}/>
      <Route path="/products" element={<Product/>}/>
      <Route path="/products/:id" element={<Productinfo/>}/>

    </Routes>

    </BrowserRouter>
  );
}

export default App;
