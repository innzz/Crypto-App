import React from 'react';
import {Switch, Route, Link, Routes} from 'react-router-dom';
import { Layout,Typography,Space } from 'antd';
import { Navbar, HomePage, Cryptocurrencies,News, CryptoDetails } from './Components';

import './App.css'

const App = () => {
  return (
    <div className="app">
        <div className="navbar">
            <Navbar />
        </div>
        <div className="main">
            <Layout>
              <div className="routes">
                <Routes>
                  <Route exact path="/" element={<HomePage />} />
                  <Route exact path="/cryptocurrencies" element={<Cryptocurrencies />} />
                  <Route exact path="/crypto/:coinId" element={<CryptoDetails />} />
                  <Route exact path="/news" element={<News />} />
                </Routes>
              </div>
            </Layout>
        <div className="footer" level={5} >
          <Typography.Title style={{ color: 'white', textAlign: 'center' }}>
            CryptoInz <br />
            All rights reserved
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
        </div>
    </div>
  )
}

export default App