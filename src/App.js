import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Product from './pages/Product';
import Transaction from './pages/Transaction';
import AboutUs from './pages/AboutUs';
import Register from './pages/Register';
import Login from './pages/Login';

// redux
import {applyMiddleware, createStore} from 'redux'
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import allReducer from './redux/reducers';

const store = createStore(allReducer, composeWithDevTools(applyMiddleware(thunk)))

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/product" element={<Product />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}
