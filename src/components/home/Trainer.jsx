import { useState,useEffect } from "react";
import { fetchTeacher } from "../../api_integration/api";
const Trainer = () => {
  const [trainners,setTrainners] = useState([]);
  useEffect(() => {
     fetchTeacher().then((result)=>{
       setTrainners(result);
     }).catch((error)=>{
       console.log(error);
     });
  }, []);
  return (
    <>
      <section id="trainers-index" className="section trainers-index">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-4 col-md-6 d-flex"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <div className="member">
                <img
                  src="assets/img/trainers/trainer-1.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="member-content">
                  <h4>Walter White</h4>
                  <span>Web Development</span>
                  <p>
                    Magni qui quod omnis unde et eos fuga et exercitationem.
                    Odio veritatis perspiciatis quaerat qui aut aut aut
                  </p>
                  <div className="social">
                    <a href="">
                      <i className="bi bi-twitter-x" />
                    </a>
                    <a href="">
                      <i className="bi bi-facebook" />
                    </a>
                    <a href="">
                      <i className="bi bi-instagram" />
                    </a>
                    <a href="">
                      <i className="bi bi-linkedin" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* End Team Member */}
            <div
              className="col-lg-4 col-md-6 d-flex"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <div className="member">
                <img
                  src="assets/img/trainers/trainer-2.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="member-content">
                  <h4>Sarah Jhinson</h4>
                  <span>Marketing</span>
                  <p>
                    Repellat fugiat adipisci nemo illum nesciunt voluptas
                    repellendus. In architecto rerum rerum temporibus
                  </p>
                  <div className="social">
                    <a href="">
                      <i className="bi bi-twitter-x" />
                    </a>
                    <a href="">
                      <i className="bi bi-facebook" />
                    </a>
                    <a href="">
                      <i className="bi bi-instagram" />
                    </a>
                    <a href="">
                      <i className="bi bi-linkedin" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* End Team Member */}
            <div
              className="col-lg-4 col-md-6 d-flex"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              <div className="member">
                <img
                  src="assets/img/trainers/trainer-3.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="member-content">
                  <h4>William Anderson</h4>
                  <span>Content</span>
                  <p>
                    Voluptas necessitatibus occaecati quia. Earum totam
                    consequuntur qui porro et laborum toro des clara
                  </p>
                  <div className="social">
                    <a href="">
                      <i className="bi bi-twitter-x" />
                    </a>
                    <a href="">
                      <i className="bi bi-facebook" />
                    </a>
                    <a href="">
                      <i className="bi bi-instagram" />
                    </a>
                    <a href="">
                      <i className="bi bi-linkedin" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* End Team Member */}
          </div>
        </div>
      </section>
    </>
  );
};
export default Trainer;
