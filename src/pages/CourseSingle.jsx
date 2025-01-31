import Hero from "../components/coursedetail/Hero";
import Course_detail from "../components/coursedetail/Course_detail";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe('pk_test_51NidCYLrsyYxaIR1udHyKuZXdNKeh85EYCrlNGU0jBtMAVrtxGmMfSSzU3kOHiY9HpOpRjvNElGicBYA4TJUWFH300zKYN7i8b');
const CourseSingle = ()=>{
    return (<>
      <Hero/>
      <Elements stripe={stripePromise}>
         <Course_detail/>
      </Elements>
    </>)
}
export default CourseSingle;