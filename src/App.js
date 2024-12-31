import Navbar from "./component/Navbar";
import ProductList from "./component/ProductList";
import Slider from "./component/Slider";
import { Routes,Route,Link } from "react-router-dom";
import About from "./component/About";
import ProductDetails from './component/ProductDetails';
function App() {

return (
  <div className='App'>
<Navbar />
<Routes>
<Route path='/' element={<>


  <Slider />
  <ProductList />
  </>
  } />

  <Route path='about' element={<About />}/>
  <Route path='product/:productId' element={<ProductDetails />}/>



</Routes>

 



  </div>

)


}

export default App;
