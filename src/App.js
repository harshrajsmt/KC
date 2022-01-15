import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { BusinessInfo } from './pages/BusinessInfo/BusinessInfo';
import NewBusiness from './components/AbotBusiness/NewBusiness/index';
import FrontPage from './components/FrontPage'
import './App.less';
import ExistBusinessInfo from './pages/ExistBusinessInfo'
import StartBusiness from './components/AbotBusiness/NewBusiness/BusinessInfoContent/StartBusiness';
import FirstContent from './components/AbotBusiness/NewBusiness/BusinessInfoContent/FirstContent';
import ExistingBusiness from './pages/ExistingBusiness';
import OwnerInfo from './pages/OwnerInfo';
import ShareHolders from './pages/ShareHolders';
import ShareHolderInfo from './pages/ShareHolderInfo';
import AboutDirector from './pages/Director/AboutDirector';
import MainHeader from './components/MainHeader';
function App() {
  return (
    <>
     <MainHeader/> 
    {/* <Router>
      <Routes>
        <Route exact path='/' element={ <FrontPage/> }></Route>
        <Route path='/businessinfo' element={ <BusinessInfo /> }></Route>
        <Route path='/newbusiness' element={ <NewBusiness/> }></Route>
        <Route path='/startbusiness' element={ <StartBusiness/>  }></Route>
        <Route path='/firstcontent' element={  <FirstContent/> }></Route>
        <Route path='/existbusinessinfo' element={ <ExistBusinessInfo/> }></Route>
        <Route path='/existingbusiness' element={ <ExistingBusiness/>  }></Route>
        <Route path='/ownerinfo' element={ <OwnerInfo/> }></Route>
        <Route path='/aboutdirector' element={ <AboutDirector/> }></Route>
      </Routes>
    </Router> */}
    </>
  );
}

export default App;
