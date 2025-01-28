import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { API_URL } from "../constants";
import StatusAlert, { StatusAlertService } from 'react-status-alert';
import 'react-status-alert/dist/status-alert.css';
import { useAuth } from "../auth/AuthProvider";
const Header = () => {
const auth = useAuth();
console.log("Authantication =",auth); 
  const openMobileMenu = () => {
    const mobileNavToggleBtn = document.querySelector(".mobile-nav-toggle");
    document.querySelector("body").classList.toggle("mobile-nav-active");
    mobileNavToggleBtn.classList.toggle("bi-list");
    mobileNavToggleBtn.classList.toggle("bi-x");
  };
  const responseMessage = async (response) => {
    try {
      let googleAuthUser = jwtDecode(response.credential);
      let userObj = {
        name: googleAuthUser.name,
        email: googleAuthUser.email,
        image: googleAuthUser.picture,
        password: Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000,
        role:'student'
      };
      const studentsResult = auth.loginAction(userObj);
      // const studentsResult = await axios.post(`${API_URL}/create-student`,userObj);
      // if(studentsResult.data.status){
      //   StatusAlertService.showSuccess('You have been register successfully !!');
      // }
      console.log(studentsResult);
    } catch (error) {
      console.log(error);
    }
  };
  const errorMessage = (error) => {
    console.log(error);
  };
  return (
    <>
    <StatusAlert/>
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
