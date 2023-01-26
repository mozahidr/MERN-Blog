import { Navbar } from './Components/Navbar/Navbar';
import { Home } from './pages/Home/Home';
import { Login } from './pages/Login/Login';
import { Register } from './pages/Register/Register';
import { Settings } from './pages/Settings/Settings';
import { Single } from './pages/Single/Single';
import { Write } from './pages/Write/Write';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const user = true;
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/writePost" element={user ? <Write /> : <Login />} />
        <Route path="/profileSetting" element={user ? <Settings /> : <Login />} />
        <Route path="/postDetails/:postId" element={<Single />} />
      </Routes>
    </Router>
  );
}

export default App;
