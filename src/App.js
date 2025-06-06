import { Route, Routes,  } from 'react-router-dom';
import './App.css';
import AnimatedVideoSlider from './components/AnimatedVideoSlider';
import CourseDetails from './components/CourseDetails';
import Landingpage from './components/Landingpage';
import Navbar from './components/Navbar';
import PerfectCourseSection from './components/PerfectCourseSection';
import PopularSubjects from './components/PopularSubjects';
import DashboardPage from './components/admin/DashboardPage';
import Dashboard from './components/admin/Dashboard';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <DashboardPage/>
       <Dashboard/>
      
        <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/Landingpage" element={<Landingpage />} />
        
        <Route path="/course/:id" element={<CourseDetails />} />
       </Routes>
    </div>
  );
}

export default App;
