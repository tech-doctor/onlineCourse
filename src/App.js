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


const  App = () => {
  return (
    <div className="App">
       <Router>
          <Switch>
            <Route path = "/" exact render = {() => ( <LandingPage/>)}/>
            <Route path = "/courses/course-selected" exact render = {() => (<CourseSelected/>)}/>
            <Route path = "/courses/category" exact render = {() => ( <CategoryListPage/>)}/>
            <Route path = "/cart" exact render = {() => ( <Cart/>)}/>
            <Route path = "/cart/checkout" exact render = {() => ( <CheckOut/>)}/>
            <Route path = "/dashboard/purchase-history" exact render = {() => ( <PurchaseHistory/>)}/>
            <Route path = "/home/my-courses" exact render = {() => ( <MyCourses/>)}/> 
            <Route path = "/courses/course-selected/watch" exact render = {() => ( <Watch/>)}/> 
          </Switch>
    </Router>
    </div>
    
  );
}

export default App;
