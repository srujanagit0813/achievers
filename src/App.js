import { Route, Routes,  } from 'react-router-dom';
import './App.css';
import Landingpage from './components/Landingpage';
import Navbar from './components/Navbar';
import CourseDetails from './pages/CourseDetails';
import MaterialDetails from './pages/MaterialDetails';
import ProfileAccessPage from './pages/ProfileAccessPage';
import { useState } from 'react';




function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <Navbar/>
       
      
        <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/Landingpage" element={<Landingpage />} />
        <Route path="/profile-access" element={<ProfileAccessPage setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="/materials/:id" element={<MaterialDetails />} />
       </Routes>
    </div>
  );
}

export default App;
