import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { API_URL } from "../../constants";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useAuth } from "../../auth/AuthProvider";
import { StatusAlertService } from "react-status-alert";

const Course_detail = () => {
  const [clientSecret, setClientSecret] = useState({});
  const stripe = useStripe();
  const elements = useElements();
  const { id } = useParams();
  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(false);
  const [paymentError, setPaymentError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState({});
  const auth = useAuth();
  // Fetch course details on component mount
  useEffect(() => {
    try {
      axios
        .get(`${API_URL}/single-course/${id}`)
        .then((result) => {
          const [product] = result.data?.send;
          setProducts(product);
        })
        .catch((error) => {
          console.error("Error fetching course details:", error);
        });
    } catch (error) {
      console.error("Error:", error);
    }
  }, [id]);

  // Handle the booking and payment process
  const bookingSeat = async () => {
    if (!auth?.token) {
      StatusAlertService.showWarning("Please sign in , If you want to book! ");
      return;
    }
    if (!stripe || !elements) return;

    setLoading(true);
    setPaymentError(null);

    try {
      const { data } = await axios.post(
        `${API_URL}/create-payment-intent/`,
        { price: products?.course_fee?.$numberDecimal },
        { headers: { Authorization: `Bearer ${auth?.token}` } }
      );
      setUser(data);
      setClientSecret(data.clientSecret);
      setShowModal(true);
    } catch (error) {
      console.error("Error during payment process:", error);
      setPaymentError("Payment failed, please try again.");
    }
    setLoading(false);
  };

  // Handle payment confirmation inside modal
  const handlePayment = async () => {
    if (!stripe || !elements) return;
    try {
      const { error, paymentIntent } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: elements.getElement(CardElement),
          },
        }
      );
      if (error) {
        setPaymentError(error.message);
      } else if (paymentIntent.status === "succeeded") {
        const bookingResponse = await axios.post(`${API_URL}/booked-details`,{abinash:"Swain"},{headers:{Authorization: `Bearer ${auth?.token}`}});
        return;
        StatusAlertService.showSuccess(
          "Payment successful! You have successfully booked the seat."
        );
        setShowModal(false);
      }
    } catch (error) {
      console.error("Error during payment process:", error);
      setPaymentError("Payment failed, please try again.");
    }
  };

  return (
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
              alt={products.title}
              id="deail_featured"
            />
            <h3>{products.title}</h3>
            <p>{products.description}</p>
          </div>

          <div className="col-lg-4">
            <div className="course-info d-flex justify-content-between align-items-center">
              <h5>Trainer</h5>
              <p>
                <Link to="javascript:void(0)">
                  {products.teacher_details?.[0]?.name}
                </Link>
              </p>
            </div>
            <div className="course-info d-flex justify-content-between align-items-center">
              <h5>Course Fee</h5>
              <p>${products.course_fee?.$numberDecimal}</p>
            </div>
            <div className="course-info d-flex justify-content-between align-items-center">
              <h5>Batch</h5>
              <p>{products?.batch_name ?? "N/A"}</p>
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
              <button
                className="booking_class"
                onClick={bookingSeat}
                disabled={loading}
              >
                {loading ? "Processing..." : "BOOK NOW"}
              </button>
            </div>
            {paymentError && <div className="error">{paymentError}</div>}
          </div>
        </div>
      </div>

      {/* Modal for Payment */}
      {showModal && (
        <div className="payment-modal">
          <div className="modal-content">
            <h3>Complete Your Payment</h3>
            <CardElement />
            <button
              className="btn btn-primary"
              onClick={handlePayment}
              disabled={loading}
            >
              {loading ? "Processing Payment..." : "Confirm Payment"}
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => setShowModal(false)}
            >
              Cancel
            </button>
            {paymentError && <div className="error">{paymentError}</div>}
          </div>
        </div>
      )}
    </section>
  );
};

export default Course_detail;
