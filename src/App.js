import Home from './imgs/slide';
import React from 'react';
import Footer from './footer'
//  import Navbar from './Navbar/Navbar';

// import {Route, Link, BrowserRouter } from 'react-router-dom'
// import Achievement  from './Achievement';
// import Contact from "./contact";
// import livescore from "./Livescore";
// import Schedule from './Schedule';
// import login from './login';


const App = () => {
  return (
    
    <div className="App">
      {/* <Navbar/> */}
      <Home/>
      <Footer/>

        {/* <Route exact path="/" component={Home}/>

         <Route exact path="/Livescore" component={livescore} />

        <Route exact path="/Schedule" component={Schedule} />
        
        

        <Route exact path="/Achievement" component={Achievement} />
        <Route exact path="/Contact" component={Contact} />

        <Route exact path="/Login" component={Login} />  */}
        
      </div>
      
    
  )
}

 export default App
// import React from 'react';
// import './App.css';
// import Navbar from './components/Navbar';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Home from './pages';
// import About from './pages/about';
// import Events from './pages/events';
// import AnnualReport from './pages/annual';
// import Teams from './pages/team';
// import Blogs from './pages/blogs';
// import SignUp from './pages/signup';
  
// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Switch>
//         <Route path='/' exact component={Home} />
//         <Route path='/about' component={About} />
//         <Route path='/events' component={Events} />
//         <Route path='/annual' component={AnnualReport} />
//         <Route path='/team' component={Teams} />
//         <Route path='/blogs' component={Blogs} />
//         <Route path='/sign-up' component={SignUp} />
//       </Switch>
//     </Router>
//   );
// }
  
// export default App;