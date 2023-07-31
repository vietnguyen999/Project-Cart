
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Category from './components/Categorys/Categorys'
import SingleProduct from './components/SingleProduct/SingleProduct'
import Newsletter from './components/Footer/Newsletter/Newsletter';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/category/:id' element={<Category/>}/>
      <Route path='/product/:id' element={<SingleProduct/>}/>
     </Routes>
    <Newsletter/>
    <Footer/>
    </div>
  );
}

export default App;
