import "./App.css";
import Header from "./containers/Header";
import ProductListing from "./containers/ProductListing"
import ProductDetails from "./containers/ProductDetails"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={ProductListing}/>
          <Route path="/product/:productId" component={ProductDetails}/>
          <Route>404! Bruhh.. Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
