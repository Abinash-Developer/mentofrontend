import axios from "axios";
import { useState,useEffect } from "react";
import { API_URL } from "../../constants";
import { Link } from "react-router-dom";
const Course = () => {
  const [allCourse,setallCourse] = useState([]);
  useEffect(()=>{
     fetchCourse();
  },[])
  const fetchCourse = async ()=>{
     try {
      const courses = await axios.get(`${API_URL}/fetch-course`);
      setallCourse(courses.data?.send)
     } catch (error) {
       console.log(error);
     }
  }
  return (
      <section id="courses" className="courses section">
        <div className="container">
          <div className="row">
           {
            allCourse.map((course)=>(
              <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch"
              data-aos="zoom-in"
              data-aos-delay={100}
            >
              <div className="course-item">
                <img
                  src={`${API_URL}/${course.image}`}
                  className="img-fluid"
                  alt="..."
                />
                <div className="course-content">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <p className="category">{course.category_details?.[0]?.title}</p>
                    <p className="price">${course.course_fee?.$numberDecimal}</p>
                  </div>
                  <h3>
                    <Link to={`/course-detail/${course._id}`} class="detail_page_link">{course.title}</Link>
                  </h3>
                  <p className="description">
                    {course.description}
                  </p>
                  <div className="trainer d-flex justify-content-between align-items-center">
                    <div className="trainer-profile d-flex align-items-center">
                      <img
                        src={`${API_URL}/${course.teache_details?.[0]?.image}`}
                        className="img-fluid"
                        alt=""
                      />
                      <a href="" className="trainer-link">
                        {course.teache_details?.[0]?.name}
                      </a>
                    </div>
                    <div className="trainer-rank d-flex align-items-center">
                      <i className="bi bi-person user-icon" />
                      &nbsp;50 &nbsp;&nbsp;
                      <i className="bi bi-heart heart-icon" />
                      &nbsp;65
                    </div>
                  </div>
                </div>
              </div>
            </div>
            ))
           }
          </div>
        </div>
      </section>
  );
};
export default Course;
