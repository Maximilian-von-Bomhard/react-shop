import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { UserView } from './views/User';
import { ShopView } from './views/Shop';
import { CartView } from './views/Cart';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/user">User</Link>
              </li>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
              <li>
                <Link to="/cart">Cart</Link>
              </li>
            </ul>
          </nav>
          <div className="clear"></div>
        </div>

        <Switch>
          <Route path="/user/:name">
            <UserView />
          </Route>
          <Route path="/user">
            <UserView />
          </Route>
          <Route path="/shop">
            <ShopView />
          </Route>
          <Route path="/cart">
            <CartView />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
