import './App.css';
import Login from './Page/Loginandsignuppage/login';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Navbar from './Page/Home/component/Navbar/Navbar';
import PrivateRoute from './PrivateRoute';
import Homepage from './Page/Home/component/Homepage/Homepage';
import io from "socket.io-client";
import Chatmain from './Page/Chat/Chatmain';

function App() {
  return (
      <div className="App">
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Homepage/>}></Route>
          <Route exact path="/log-in" element={<Login/>}></Route>
          <Route exact path="/chat" element={<Chatmain/>}></Route>
        </Routes>
      </div>
  );
}

export default App;

