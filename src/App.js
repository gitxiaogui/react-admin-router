import React, {Suspense}from 'react';
import { HashRouter, Route,Switch } from 'react-router-dom';
import Layout from './layout/layout'


function App() {
  return (
    <HashRouter>
      <Suspense fallback={<div className="loading"></div>}>
        <Switch>
          <Layout></Layout>
        </Switch>
      </Suspense>
    </HashRouter>

  );
}

export default App;
