import React, {Suspense}from 'react';
import { HashRouter, Route,Switch } from 'react-router-dom';
import Layout from './layout/layout'
import { Spin } from 'antd';

function App() {
  return (
    <HashRouter>
      <Suspense fallback={<div className="loading"><Spin tip="加载中..." size="large"></Spin></div>}>
        <Switch>
          <Layout></Layout>
        </Switch>
      </Suspense>
    </HashRouter>
  );
}

export default App;
