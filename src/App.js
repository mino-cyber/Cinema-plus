import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import CinemaList from './AdminSide/layoutAdmin/layoutAdmin'
import LoginUser from './UserSide/loginUser'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LoginUser/>}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
