import React from 'react';
import Homepage from './Pages/Homepage/Homepage.comp';
import Shoppage from './Pages/Shoppage/shop.compo';
import {Switch,Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Switch>
       <Route exact path='/' component={Homepage}/>
       <Route path='/shop' component={Shoppage}/>
       </Switch>
    </div>
  );
}

export default App;
