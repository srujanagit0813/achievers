import { Navigate, Route, Routes,  } from 'react-router-dom';
import './App.css';
import Landingpage from './components/Landingpage';
import Navbar from './components/Navbar';
import CourseDetails from './pages/CourseDetails';
import MaterialDetails from './pages/MaterialDetails';
import ProfileAccessPage from './pages/ProfileAccessPage';
import { useState } from 'react';
import CourseLesson from './pages/CourseLesson';
import MaterialPage from './pages/MaterialPage';
import QuizPage from './pages/QuizPage';
import AssignmentPage from './pages/AssignmentPage';
import ClassPage from './components/QuizzSection';
import HomePage from './pages/HomePage';
import PerfectCourseSection from './components/PerfectCourseSection';
import StartQuizPage from './pages/StartQuizPage';
import ContactUs from './components/ContactUs';
import Appbar from './components/Appbar';
import { useLocation } from "react-router-dom";
import PaymentPage from './pages/PaymentPage';
import SuccessPage from './pages/SuccessPage';
import QuizQuestions from './components/QuizQuestions';
import QuizResult from './components/QuizResult';


function App() {
  const hideNavbarRoutes = ["/login", "/signup", "/admin"];
   const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
 

 const hideNavbar = location.pathname === '/';
  
  return (
    <div className="App">
     {/* {showNavbar && <Navbar/>}  */}
         {!hideNavbar && <Navbar />}
      {/* {!hideNavbarRoutes.includes(location.pathname) && <Appbar />} */}
        <Routes>
           <Route path="/" element={<HomePage />} />
        {/* <Route path="/" element={<Landingpage />} /> */}
        <Route path="/Landingpage" element={<Landingpage />} />
        <Route path="/profile-access" element={<ProfileAccessPage setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/course/:id" element={<CourseDetails />} />
         <Route path="/CourseLesson/:id" element={<CourseLesson />} />
          <Route path="/course/:id/material" element={<MaterialPage/>} />
        <Route path="/course/:id/quiz" element={<QuizPage />} />
        <Route path="/course/:id/assignment" element={<AssignmentPage />} />
        <Route path="/materials/:id" element={<MaterialDetails />} />
        <Route path='/class-page' element={<ClassPage/>}/>
        <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<Navigate to="/" replace />} />
        <Route path='/start-quiz' element={<StartQuizPage/>}/>
        <Route path="/quiz-questions" element={<QuizQuestions />} />
            <Route path="/quiz-result" element={<QuizResult />} />
  <Route path="/view-all-courses" element={<PerfectCourseSection/>}/>
   <Route path="/PaymentPage" element={<PaymentPage/>}/>
   <Route path="/success" element={<SuccessPage/>}/>

       </Routes>
    </div>
  );
}

export default App;