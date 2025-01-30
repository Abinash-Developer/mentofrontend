import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { API_URL } from "../../constants";
import { useElements, useStripe } from '@stripe/react-stripe-js';
const Course_detail = () => {
  const [clientSecret, setClientSecret] = useState('');
  const stripe = useStripe();
  const elements = useElements();
  const { id } = useParams();
  const [products, setProducts] = useState({});
  useEffect(() => {
    try {
      axios
        .get(`${API_URL}/single-course/${id}`)
        .then((result) => {
          const [product] = result.data?.send;
           console.log("product =",product)
           setProducts(product);
         })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);
  const bookingSeat = async ()=>{
     const stipePaymentIntent = await axios.get(`${API_URL}/create-payment-intent/`);
     console.log(stipePaymentIntent);
  }
  return (
    <>
      <section
        id="courses-course-details"
        className="courses-course-details section"
      >
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-8">
              <img
                src={`${API_URL}/${products.image}`}
                className="img-fluid"
                alt=""
                id="deail_featured"
              />
              <h3>{products.title}</h3>
              <p>
                {products.description}
              </p>
            </div>
            <div className="col-lg-4">
              <div className="course-info d-flex justify-content-between align-items-center">
                <h5>Trainer</h5>
                <p>
                  <Link to="javascript:void(0)">{products.teacher_details?.[0]?.name}</Link>
                </p>
              </div>
              <div className="course-info d-flex justify-content-between align-items-center">
                <h5>Course Fee</h5>
                <p>${products.course_fee?.$numberDecimal}</p>
              </div>
              <div className="course-info d-flex justify-content-between align-items-center">
                <h5>Batch</h5>
                <p>{products?.batch_name??'N/A'}</p>
              </div>
              <div className="course-info d-flex justify-content-between align-items-center">
                <h5>Available Seats</h5>
                <p>{products.available_seats}</p>
              </div>
              <div className="course-info d-flex justify-content-between align-items-center">
                <h5>Schedule</h5>
                <p>{products.schedule}</p>
              </div>
              <div className="course-info d-flex justify-content-between align-items-center">
                <button className="booking_class" onClick={bookingSeat}>BOOK NOW</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Course_detail;
