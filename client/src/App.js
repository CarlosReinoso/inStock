import './App.scss';
import { Link, Route } from 'react-router-dom';
import WarehouseList from './components/warehouseList/WarehouseList';

function App() {
  return (
    <div className="App">

      {/* just so i can navigate, can delete */}
      <Link to="/warehouses">warehouse</Link>
      <Route path="/warehouses">
        <WarehouseList />
      </Route>
    </div>
  );
}

export default App;
