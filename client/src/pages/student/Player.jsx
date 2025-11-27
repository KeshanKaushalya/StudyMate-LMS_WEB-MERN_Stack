import { useEffect } from 'react'
import React, { useContext, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import { useParams } from 'react-router-dom'
import { assets } from '../../assets/assets'

const Player = () => {

  const {enrolledCourses, calculateChapterTime} = useContext(AppContext)
  const {courseId} = useParams()
  const [courseData, setCourseData] = useState(null)
  const [openSections, setOpenSection] = useState({})
  const [playerData, setPlayerdata] = useState(null)

  const getCourseData = ()=>{
    enrolledCourses.map((course)=>{
      if(course._id === courseId){
        setCourseData(course)
      }
    })
  }

  const toggleSection = (index)=>{
    setOpenSection((prev)=>(
      {...prev,
        [index]: !prev[index],
      }
    ));
  };

  useEffect(()=>{
    getCourseData()
  },[])

  return (
    <>
      <div className='p-4 sm:p-10 flex flex-col-reverse md:grid md:grid-cols-2 gap-10 md:px-36'>

        {/* left column */}
          <div className='text-gray-800'>
            <h2 className='text-xl font-semibold'>Course Structure</h2>




          </div>

      

        {/* right column */}
          <div></div>

    </div>
    </>
  )
}

export default Player
