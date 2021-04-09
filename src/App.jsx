import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ReactDemo from './components/reactdemo';
import Home from './pages/Home';
import Layout from './components/Layout';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/react">
            <ReactDemo />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
