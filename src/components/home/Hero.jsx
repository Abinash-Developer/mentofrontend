const Hero = () => {
  return (
    <>
      <section id="hero" className="hero section dark-background">
        <img src="/assets/img/hero-bg.jpg" alt="" data-aos="fade-in" />
        <div className="container">
          <h2 data-aos="fade-up" data-aos-delay={100}>
            Learning Today,
            <br />
            Leading Tomorrow
          </h2>
          <p data-aos="fade-up" data-aos-delay={200}>
            We are team of talented designers making websites with Bootstrap
          </p>
          <div className="d-flex mt-4" data-aos="fade-up" data-aos-delay={300}>
            <a href="courses.html" className="btn-get-started">
              Get Started
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
export default Hero;
