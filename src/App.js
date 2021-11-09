// import logo from './logo.svg';
import './App.css';
import TodoFeature from './features/Todo';
import AlbumFeature from './features/Song';
import { Redirect, Route, Switch } from 'react-router';
// import { Link, NavLink } from 'react-router-dom';
import  NotFound  from './components/NotFound';
// import { useState } from 'react';
// import productApi from './api/productApi';
import Header from './components/Header';
import Footer from './components/Footer';
// import CounterFeature from './features/Counter';
import HomePage from './features/HomePage';
import Product from './features/Product';
import DetailProduct from './features/Product/pages/DetailProduct/DetailProduct';
import Login from './features/Login/Login';
import SignUp from './features/Register/SignUp';



function App() {
  // const [listCate, SetlistCate] = useState([]);
  // const [pagination, setPagination] = useState();
  // useEffect(()=>{
  //   const fecthProduct = async () =>{
  //     const params = {
  //       sortBy: "-createdAt",
  //     }
  //     const productList = await productApi.getAll(params);
  //     console.log(productList);
  //     const arrCate = productList.results ;
  //     SetlistCate(arrCate);
  //   }

  //   fecthProduct();
  // },[]);

  // console.log(listCate);
  return (

    <div className="App">
      <Header/>
      {/* <ul>
      {listCate.map((todo, idx) => (
        <>
        <p
          key={todo.id}
          
        >
          {todo.name}
        </p>
        <img src={todo.image} />
        </>
      ))}
      </ul> */}
      
      {/* <CounterFeature/> */}
      <Switch>
      <Redirect from="/home" to="/" />
      <Route path='/' component={HomePage} exact></Route>
      <Route path='/todos' component={TodoFeature}></Route>
      <Route path='/album' component={AlbumFeature}></Route>
      <Route path='/products' component={Product}></Route>
      <Route path='/product-detail/:slug' component={DetailProduct}></Route>
      <Route path='/register' component={SignUp}></Route>
      <Route path='/login' component={Login}></Route>
      <Route component={NotFound}></Route>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
