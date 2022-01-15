import Home from './components/Home';
import { BrowserRouter as Route, Switch } from 'react-router-dom'
import Layout from './components/Layout';
import Store from './components/Store'
import EditStore from './components/EditStore'
import Panier from './components/Panier'

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/store'>
            <Store />
          </Route>
          <Route exact path='/editstore'>
            <EditStore />
          </Route>
          <Route exact path='/panier'>
            <Panier />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
