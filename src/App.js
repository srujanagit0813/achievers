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
import DashboardSection from './components/admin/DashboardSection';
import NoticeBoardAndNotifications from './components/admin/NoticeBoardAndNotifications';
import TotalFeedbacks from './components/admin/totalfeedback';
import EdurockFooter from './components/admin/EdurockFooter';
import UserProfile from './components/admin/UserProfile';
import ChatDashboard from './components/admin/ChatUI';
import CourseCard from './components/CourseCard';
import CourseDashboard from './components/admin/courses';
import QuizAttemptsPage from './components/admin/quizData';
import UserProfilePage from './components/admin/UserProfilePage';
import CreateCourse from './components/admin/CreateCourse';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <DashboardPage/>
       <Dashboard/>
      <DashboardSection/>
      <NoticeBoardAndNotifications/>
      <TotalFeedbacks/>
      <EdurockFooter/>
      <UserProfile/>
      <ChatDashboard/>
      <CourseDashboard/>
      <QuizAttemptsPage/>
      <UserProfilePage/>
      <CreateCourse/>
        <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/Landingpage" element={<Landingpage />} />
        
        <Route path="/course/:id" element={<CourseDetails />} />
       </Routes>
    </div>
  );
}

export default App;
