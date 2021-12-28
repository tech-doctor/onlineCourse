import LandingPage from "./Pages/landingPage/"
import CourseSelected from "./Pages/courseSelected";
import CheckOut from "./Pages/checkout";
import PurchaseHistory from "./Pages/purchaseHistory";
import MyCourses from "./Pages/myCourses";
import Cart from "./Pages/cart"
import Watch from "./Pages/watch"
import CategoryListPage from './Pages/categoryListPage'
import './App.css';
import {BrowserRouter as Router, Route, Switch,} from 'react-router-dom';
import LoginPage from "./Auth/login";
import  RegisterPage from "./Auth/Register";
import PageNotFound from "./Pages/pageNotFound";


const  App = () => {
  return (
    <div className="App">
       <Router>
          <Switch>
            <Route exact path = "/" component={LandingPage}/>
            <Route exact path = "/login" component={LoginPage}/>
            <Route exact path = "/register" component = {RegisterPage}/>
            <Route exact path = "/courses/course-selected/:id" component={CourseSelected}/>
            <Route exact path = "/courses/category/:playlistId" component={CategoryListPage}/>
            <Route exact path = "/cart" component={Cart}/>
            <Route exact path = "/cart/checkout" component={CheckOut}/>
            <Route exact path = "/dashboard/purchase-history"component={PurchaseHistory}/>
            <Route exact path = "/home/my-courses" component={MyCourses}/> 
            <Route exact path = "/courses/course-selected/watch" component={Watch}/> 
            <Route exact path = "*" component={PageNotFound}/>
          </Switch>
    </Router>
    </div>
    
  );
}

export default App;
