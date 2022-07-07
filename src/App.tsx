import React from 'react';
import TopHeader from "./component/topHeader"
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import NotFound from './pages/notFound'
import BroZone from './pages/broZone';
import LockerRoom from './pages/lockerRoom';
import RoadMap from './pages/roadMap';
import HomePage from './pages/homePage'
import StadiumPage from './pages/stadiumPage'
import ShopPage from './pages/shopPage'
import TeamPage from './pages/teamPage';
import MintPage from './pages/mintPage';

function App() {
  return (
    <BrowserRouter>
      <TopHeader></TopHeader>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='brozone' element={<BroZone/>}></Route>
        <Route path='lockerroom' element={<LockerRoom/>}></Route>
        <Route path='roadmap' element={<RoadMap/>}></Route>
        <Route path='stadium' element={<StadiumPage/>}></Route>
        <Route path='team' element={<TeamPage/>}></Route>
        <Route path='shop' element={<ShopPage/>}></Route>
        <Route path='mint' element={<MintPage/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </BrowserRouter>
      
    
  );
}

export default App;
