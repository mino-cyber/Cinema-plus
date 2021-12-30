import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import LoginUser from './UserSide/loginUser';
import LayoutAdmin from './AdminSide/layoutAdmin/layoutAdmin';
import HomePage from './UserSide/HomePage/homePage';
import UserProfile from './UserSide/UserProfile/userProfile';
import Landing from './UserSide/Landing'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/loginUser" element={<LoginUser/>}/>
          <Route path="/HomePage" element={<HomePage/>}/>
          <Route path="/userProfile" element={<UserProfile/>}/>
          <Route path="/LayoutAdmin" element={<LayoutAdmin/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
