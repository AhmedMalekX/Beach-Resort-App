import React from 'react';
import './App.css';

// Import Pages
import Home from './pages/Home';
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import ErrorPage from "./pages/ErrorPage";

// Import Route Components
import {Route, Switch} from 'react-router-dom'

// Import Components
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/rooms/" component={Rooms} />
          <Route exact path="/rooms/:slug" component={SingleRoom}/>
          <Route component={ErrorPage}/>
      </Switch>
    </>
  );
}

export default App;
