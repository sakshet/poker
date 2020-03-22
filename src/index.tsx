import "bootstrap/dist/css/bootstrap.min.css";
import * as React from 'react';
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from './components/App';

render(
  <Router>
    <App></App>
  </Router>,
  document.getElementById("root")
)