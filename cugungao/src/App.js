import './App.css';
import Login from './Page/Loginandsignuppage/login';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './Page/Home/component/Navbar/Navbar';

import Homepage from './Page/Home/component/Homepage/Homepage';
function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Homepage/>
    </div>
    </Router>
  );
}

export default App;
