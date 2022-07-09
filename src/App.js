import React from "react";
// import LandingPage from "./Pages/landingPage/"
// import CourseSelected from "./Pages/courseSelected";
// import CheckOut from "./Pages/checkout";
// import PurchaseHistory from "./Pages/purchaseHistory";
// import MyCourses from "./Pages/myCourses";
// import Cart from "./Pages/cart"
// import Watch from "./Pages/watch"
// import CategoryListPage from './Pages/categoryListPage'
// import Random from "./Pages/random";
import './App.css';
import {BrowserRouter as Router, Route, Switch,} from 'react-router-dom';
// import LoginPage from "./Auth/login";
// import  RegisterPage from "./Auth/Register";
import PageNotFound from "./Pages/pageNotFound";

const LandingPage = React.lazy(() => import('./Pages/landingPage'));
const CourseSelected = React.lazy(() => import('./Pages/courseSelected'));
const CategoryListPage = React.lazy(() => import('./Pages/categoryListPage'));
const  CheckOut = React.lazy(() => import('./Pages/checkout')); 
const  PurchaseHistory = React.lazy(() => import('./Pages/purchaseHistory'));
const  MyCourses = React.lazy(() => import('./Pages/myCourses'));
const  Cart = React.lazy(() => import('./Pages/cart'));
const  Watch = React.lazy(() => import('./Pages/watch'));
const Random = React.lazy(() => import('./Pages/random'));
const LoginPage = React.lazy(() => import('./Auth/login'));
const RegisterPage = React.lazy(() => import('./Auth/Register'));



const  App = () => {
  return (
    <div className="App">
      <React.Suspense fallback={<div>Loading...</div>}>
       <Router>
          <Switch>
            <Route exact path = "/login" component={LoginPage}/>
            <Route exact path = "/register" component = {RegisterPage}/>
            <Route exact path = "/" component={LandingPage}/>
            <Route exact path = "/courses/:id" component={CourseSelected}/>
            <Route exact path = "/category/:playlistId" component={CategoryListPage}/>
            <Route exact path = "/random" component={Random}/>
            <Route exact path = "/cart" component={Cart}/>
            <Route exact path = "/cart/checkout" component={CheckOut}/>
            <Route exact path = "/dashboard/purchase-history"component={PurchaseHistory}/>
            <Route exact path = "/home/my-courses" component={MyCourses}/> 
            <Route exact path = "/courses/:id/watch" component={Watch}/> 
            <Route exact path = "/*" component={PageNotFound}/>
          </Switch>
    </Router>
      </React.Suspense>
    </div> 
  );
}

export default App;
