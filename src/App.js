// import logo from './logo.svg';
import './App.css';
import TodoFeature from './features/Todo';
import AlbumFeature from './features/Song';
import { Redirect, Route, Switch } from 'react-router';
import  NotFound  from './components/NotFound';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './features/HomePage';
import Product from './features/Product';
import DetailProduct from './features/Product/pages/DetailProduct/DetailProduct';
import Login from './features/Login/Login';
import Register from './features/Auth/components/Register';



function App() {

  return (
    <div className="App">
      <Header/>

      <Switch>
      <Redirect from="/home" to="/" />
      <Route path='/' component={HomePage} exact></Route>
      <Route path='/todos' component={TodoFeature}></Route>
      <Route path='/album' component={AlbumFeature}></Route>
      <Route path='/products' component={Product}></Route>
      <Route path='/product-detail/:slug' component={DetailProduct}></Route>
      <Route path='/register' component={Register}></Route>
      <Route path='/login' component={Login}></Route>
      <Route component={NotFound}></Route>
      </Switch>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
