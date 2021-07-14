import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import Apis from './Apis';
import PostEInvoice from './PostEInvoice';
import GetEInvoice from './GetEInvoice';
import Home from './Home';
import PublicRoute from './Utils/PublicRoute';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <div className="header" >
            <div class="container">
              <NavLink class="logo" to="/">E-Invoicing SDK</NavLink>
              <NavLink exact activeClassName="active" to="/">Home</NavLink>
              <NavLink activeClassName="active" to="/Apis">Apis</NavLink>
              {/* <NavLink activeClassName="active" to="/PostEInvoice">Post E-Invoice</NavLink>
              <NavLink activeClassName="active" to="/GetEInvoice">Get E-Invoice</NavLink> */}
            </div>
          </div>

          <div className="content">
            <Switch>
              <Route exact path="/" component={Home} />
              <PublicRoute path="/Apis" component={Apis} />
              <PublicRoute path="/PostEInvoice" component={PostEInvoice} />
              <PublicRoute path="/GetEInvoice" component={GetEInvoice} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
