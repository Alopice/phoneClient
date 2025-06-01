import { useState } from 'react'
import './App.css'
import HomePage from './pages/homepage';
import TaskBar from './utils/homepage/taskbar';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import DetailsPage from './pages/detailspage';
import LoginPage from './pages/loginpage';
import RegisterPage from './pages/registerpage';
import CartPage from './pages/cartpage';
import WishListPage from './pages/wishlistpage';
import CheckoutPage from './pages/checkoutpage';
import OrdersPage from './pages/orderspage';
import EditUser from './pages/settings_page/user_editor';
import Settings from './pages/settings_page/settingspage';
import Disclaimer from './utils/general_components/disclaimer';
const queryClient = new QueryClient();
function App(){
  return(
    <>
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
    <TaskBar/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/details/:id' element={<DetailsPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='/cart' element={<CartPage/>}/>
      <Route path='/wishlist' element={<WishListPage/>}/>
      <Route path='/checkout/:total' element={<CheckoutPage/>}/>
      <Route path='/orders' element={<OrdersPage/>}/>
      <Route path='/edit' element={<EditUser/>}/>
      <Route path='/settings' element={<Settings/>}/>
    </Routes>
    <Disclaimer/>
    </BrowserRouter>
  
    </QueryClientProvider>
    </>
  );
}

export default App
