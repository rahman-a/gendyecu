import React, {useRef} from 'react'
import style from './style.module.scss'
import CourseCard from '../CourseCard'
import CardSlider from '../CardSlider'

const Courses = () => {
  const containerRef = useRef(null)
    
    return (
        <div className={style.courseSection}>
           <h2 data-aos='fade-down'>Explore our latest courses</h2>
            <div className="container" 
            style={{position:'relative', overflow:'hidden'}}
            ref={containerRef}
            data-aos='fade-left'>
                <CardSlider
                    length={10}
                    containerRef={containerRef}>
                        {[...Array(10)].map((card, idx) => (
                            <CourseCard num={idx + 1} fav/>
                        ))}
                </CardSlider>
            </div>
        </div>
    )
}

export default Courses
// 