import React from 'react'
import AnimatedVideoSlider from './AnimatedVideoSlider'
import MaterialCoursesSection from './MaterialCoursesSection'
import PerfectCourseSection from './PerfectCourseSection'
import PopularSubjects from './PopularSubjects'

const Landingpage = () => {
  return (
    <div>
      <AnimatedVideoSlider/>
      <PopularSubjects/>
      <PerfectCourseSection/>
      <MaterialCoursesSection/>
    </div>
  )
}

export default Landingpage
