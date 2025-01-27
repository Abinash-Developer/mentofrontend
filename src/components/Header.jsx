import { Link } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
const Header = () => {
  const openMobileMenu = () => {
    const mobileNavToggleBtn = document.querySelector(".mobile-nav-toggle");
      document.querySelector("body").classList.toggle("mobile-nav-active");
      mobileNavToggleBtn.classList.toggle("bi-list");
      mobileNavToggleBtn.classList.toggle("bi-x");
    };
    const responseMessage = (response) => {
        console.log("Google Response =",jwt_decode(response.credential));
    };
    const errorMessage = (error) => {
        console.log(error);
    };
  return (
    <>
      <header
        id="header"
        className="header d-flex align-items-center sticky-top"
      >
        <div className="container-fluid container-xl position-relative d-flex align-items-center">
          <a
            href="index.html"
            className="logo d-flex align-items-center me-auto"
          >
            {/* Uncomment the line below if you also wish to use an image logo */}
            {/* <img src="assets/img/logo.png" alt=""> */}
            <h1 className="sitename">Mentor</h1>
          </a>
          <nav id="navmenu" className="navmenu">
            <ul>
              <li>
                <Link to="/" className="active">
                  Home
                  <br />
                </Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/courses">Courses</Link>
              </li>
              <li>
                <Link to="/trainers">Trainers</Link>
              </li>
              <li>
                <Link to="/events">Events</Link>
              </li>
              {/* <li>
                <Link to="/pricing">Pricing</Link>
              </li> */}
              
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
            <i
              className="mobile-nav-toggle d-xl-none bi bi-list"
              onClick={openMobileMenu}
            />
          </nav>
          <Link className="btn-getstarted" to="">
          <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
          </Link>
        </div>
      </header>
    </>
  );
};
export default Header;
