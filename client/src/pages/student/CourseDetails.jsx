import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'

const CourseDetails = () => {

   const {id} = useParams()

   const [courseData, setCoursedata] = useState(null)

   const {allCourses} = useContext(AppContext)

   const fetchCourseData = async ()=>{
     const findCourse = allCourses.find(course => course._id === id)
     setCoursedata(findCourse);
   }

   useEffect(()=>{
    fetchCourseData()
   },[])

  return (
    <div>
      

      {/* left colomn */}
      <div></div>

      {/* right colomn */}
      <div></div>
      
    </div>
  )
}

export default CourseDetails
