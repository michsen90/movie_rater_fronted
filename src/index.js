import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Auth from './components/auth';
import { CookiesProvider } from 'react-cookie';


function Router(){

  return(
    <React.StrictMode>
      <BrowserRouter>
        <CookiesProvider>
          <Routes>
            <Route exact path="/" Component={Auth}/>
            <Route exact path="/movies" Component={App}/>
          </Routes>
        </CookiesProvider>
      </BrowserRouter>
    </React.StrictMode>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router/>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
