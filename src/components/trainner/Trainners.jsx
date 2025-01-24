import axios from "axios";
import { useEffect,useState } from "react";
import { API_URL } from "../../constants";

const Trainners = () => {
  const [trainner,setTrainners] = useState([]);
  useEffect(()=>{
    fetchTrainners();
  },[])
  const fetchTrainners = async ()=>{
    try {
       const trainner = await axios.get(`${API_URL}/fetch-teacher`);
       setTrainners(trainner.data.send);
       console.log(trainner.data.send);
      } catch (error) {
        console.log(error);
      }
  }
  return (
    <>
      <section id="trainers" className="section trainers">
        <div className="container">
          <div className="row gy-5">
            {trainner.map((singleTrainner)=>(
                <div
                className="col-lg-4 col-md-6 member"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <div className="member-img">
                  <img
                    src={`${API_URL}/${singleTrainner.image}`}
                    className="img-fluid"
                    alt=""
                  />
                  <div className="social">
                    <a href="#">
                      <i className="bi bi-twitter-x" />
                    </a>
                    <a href="#">
                      <i className="bi bi-facebook" />
                    </a>
                    <a href="#">
                      <i className="bi bi-instagram" />
                    </a>
                    <a href="#">
                      <i className="bi bi-linkedin" />
                    </a>
                  </div>
                </div>
                <div className="member-info text-center">
                  <h4>{singleTrainner.name}</h4>
                  <span>{singleTrainner.category_details?.[0]?.title}</span>
                  <p>
                    {singleTrainner.description}
                  </p>
                </div>
              </div>
            ))}
           
          </div>
        </div>
      </section>
    </>
  );
};
export default Trainners;
