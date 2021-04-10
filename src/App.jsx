import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ReactDemo from './components/reactdemo';
import Home from './pages/Home';
import Layout from './components/Layout';
import NotFound from './pages/NotFound';
import VideosProvider from './state/VideosProvider';

function App() {
  return (
    <BrowserRouter>
      <VideosProvider>
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
      </VideosProvider>
    </BrowserRouter>
  );
}

export default App;
