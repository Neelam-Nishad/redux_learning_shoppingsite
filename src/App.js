import './App.css';
import Header from './components/Header';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import ProductListing from './components/ProductListing';
import ProductDetail from './components/ProductDetail';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Switch>
        <Route path="/" exact component={ProductListing}/>
        <Route path="/product/:productId" exact component={ProductDetail}/>
        <Route>404 not found</Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
