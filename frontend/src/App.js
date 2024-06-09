import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import { Restaurants } from './containers/Restaurants';
import { Foods } from './containers/Foods';
import { Orders } from './containers/Orders';

function App() {
  return (
    <Router>
      <Routes>
        {/* 店舗の一覧ページ */}
        <Route path="/restaurants" element={<Restaurants />} />
        {/* フード一覧ページ */}
        <Route path="/foods" element={<Foods />} />
        {/* 注文一覧ページ */}
        <Route path="/orders" element={<Orders />} />
        {/* フード一覧ページ（レストランID付き） */}
        <Route path="/restaurants/:restaurantsId/foods" element={<Foods />} />
      </Routes>
    </Router>
  );
}

export default App;
