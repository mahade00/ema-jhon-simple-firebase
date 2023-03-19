import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import OrderReview from './components/OrderReview/OrderReview';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import PrivateRoute from './components/PriveteRoute/PrivateRoute';
import Register from './components/Register/Register';
import Shop from './components/Shop/Shop';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
        <Header></Header>
        <Routes>
          <Route  path="/" element={<Shop/>}>           
          </Route>
          <Route path="/shop" element={<Shop/>}>           
          </Route>
          <Route path="/review" element={<OrderReview/>}>            
          </Route>
          <Route path="/inventory" element={<Inventory/>} >            
          </Route>
            <Route path="/placeorder" element={
              <PrivateRoute>
                <PlaceOrder />
              </PrivateRoute>
              }>            
          </Route>
            <Route path='/login' element={
                 <Login />    
            }>           
          </Route>
          <Route path='/register' element={<Register/>}>            
          </Route>
          <Route path="*" element={<NotFound/>}>            
          </Route>
        </Routes>
      </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
