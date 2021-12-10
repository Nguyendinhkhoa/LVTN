// import logo from './logo.svg';
import './App.css';
import TodoFeature from './features/Todo';
import AlbumFeature from './features/Song';
import { Redirect, Route, Switch } from 'react-router';
import NotFound from './components/NotFound';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './features/HomePage';
import Product from './features/Product';
import DetailProduct from './features/Product/pages/DetailProduct/DetailProduct';
import Login from './features/Login/Login';
import Register from './features/Auth/components/Register';
import Cart from './features/Cart';
import TextField from '@material-ui/core/TextField';
import Test from './features/Test';
import Search from './features/Search';
import ScrollTop from './components/ScrollTop';
import Account from './features/Account';
import Order from './features/Order';
import About from './features/About';
import ViewOder from './features/ViewOrder';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Chat from './components/Chat';
function App() {

  return (
    <div className="App">
      <Chat/>

      <Header />
      <Switch>
        <Redirect from="/home" to="/" />
        <Route path="/" component={HomePage} exact></Route>
        <Route path="/todos" component={TodoFeature}></Route>
        <Route path="/album" component={AlbumFeature}></Route>
        <Route path="/products" component={Product}></Route>
        <Route path="/product-detail/:slug" component={DetailProduct}></Route>
        <Route path="/register" component={Register}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/cart" component={Cart}></Route>
        <Route path="/test" component={Test}></Route>
        <Route path="/search" component={Search}></Route>
        <Route path="/account" component={Account} exact></Route>
        <Route path="/order" component={Order}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/account/view-order/:orderId" component={ViewOder}></Route>
        <Route component={NotFound}></Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
