import React from 'react';
import Homepage from './Pages/Homepage/Homepage.comp';
import {Switch,Route } from 'react-router-dom'

const Hatspage=()=>(
  <div className="Hats">
    <h1>Hats</h1>
  </div>
);

const Jacketpage=()=>(
  <div className="Hats">
    <h1>Jacket</h1>
  </div>
);
const Sneakerpage=(prop)=>(
  <div className="Hats">
    <h1>Sneaker </h1>
  </div>
);
const Womenspage=()=>(
  <div className="Hats">
    <h1>Womens</h1>
  </div>
);
const Menspage=()=>(
  <div className="Hats">
    <h1>Mens</h1>
  </div>
);
function App() {
  return (
    <div className="App">
      <Switch>
       <Route exact path='/' component={Homepage}/>
       <Route path='/shop/hats' component={Hatspage}/>
       <Route path='/shop/jackets' component={Jacketpage}/>
       <Route path='/shop/sneakers' component={Sneakerpage}/>
       <Route path='/shop/womens' component={Womenspage}/>
       <Route path='/shop/mens' component={Menspage}/>
      </Switch>
    </div>
  );
}

export default App;
