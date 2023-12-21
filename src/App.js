import './css/App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SingleShipment from './pages/SingleShipment';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='' element = { <HomePage/> } />
        <Route path='shipment/:id' element = { <SingleShipment/> } />
      </Routes>
    </div>
  );
}

export default App;
