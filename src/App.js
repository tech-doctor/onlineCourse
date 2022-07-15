import React from "react";
import './App.css';
import {BrowserRouter as Router, Route, Switch,} from 'react-router-dom';
import PageNotFound from "./Pages/pageNotFound";
import {InitialLoader} from './Component/Loader';

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
      <React.Suspense 
        fallback={ 
        <InitialLoader
          type={'spinningBubbles'}
          color={'#02897A'} 
        />
      }>
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
