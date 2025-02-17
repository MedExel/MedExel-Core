const App = () => {
  React.useEffect(() => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  }, []);

  return (
    <React.Fragment>
      <header>
        <nav>
          <div className="logo">MedExel</div>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#doctors">Doctors</a></li>
            <li><a href="#appointment">Appointment</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#register">Register</a></li>
            <li><a href="#consultation" className="cta">Try Free Consultation</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="home">
          <h1>We Are Ready to Help Your Health Problems</h1>
          <p>In times like today, your health is very important, especially since the number of COVID-19 cases is increasing day by day, so we are ready to help you with your health consultation</p>
          <a href="#" className="cta">Let's Get Started</a>
        </section>

        <section id="stats">
          <div className="stat">
            <h2>200+</h2>
            <p>Active Doctor</p>
          </div>
          <div className="stat">
            <h2>15K+</h2>
            <p>Active User</p>
          </div>
          <div className="stat">
            <h2>50+</h2>
            <p>Active Pharmacy</p>
          </div>
        </section>

        <section id="services">
          <h2>Our Main Services Categories</h2>
          <div className="service-grid">
            <div className="service-card">
              <h3>Chat with doctor</h3>
              <p>You can connect directly, quickly and easily, and there is no need to doubt the quality of the consultation and treatment offered.</p>
            </div>
            <div className="service-card">
              <h3>First Aid and Wound Care</h3>
              <p>Get priority services in hospitals with MedExel. Which allows you to go to the hospital more practically in Emergency and Urgent Care.</p>
            </div>
            <div className="service-card">
              <h3>Health Store</h3>
              <p>Talk about the health complaints you are experiencing and don't hesitate to ask about the proper treatment.</p>
            </div>
          </div>
        </section>

        <section id="special-services">
          <h2>Our Special Services</h2>
          <div className="service-grid">
            <div className="service-card">
              <h3>Covid-19 Test</h3>
              <p>Prevention and Testing, Rapid and PCR Testing, Antibody Testing, Diagnosis and Initial Care.</p>
            </div>
            <div className="service-card">
              <h3>Herbal Supplement</h3>
              <p>Herbal medicine uses plant-based substances to support healing and maintain health. These treatments are often used as a natural alternative or complement to conventional medicine.</p>
            </div>
            <div className="service-card">
              <h3>Laboratory Test</h3>
              <p>1. Blood Tests<br/>2. Infection and Immunity Tests<br/>3. Hormonal and Reproductive Health Tests<br/>4. Additional Services</p>
            </div>
            <div className="service-card">
              <h3>Health care regular</h3>
              <p>1. General Medical Services<br/>2. Diagnostic Services<br/>3. Women's Health Services</p>
            </div>
          </div>
        </section>

        <section id="doctors">
          <h2>Our Doctors</h2>
          <div className="doctor-card">
            <img src="https://via.placeholder.com/150" alt="Dr. James Wellington" />
            <h3>Dr. James Wellington</h3>
            <p>Orthopedy</p>
            <a href="#" className="cta">Read More</a>
          </div>
          <a href="#" className="cta">View All Doctors</a>
        </section>

        <section id="contact">
          <h2>For your health contact us:</h2>
          <p>+48 555 665 9999</p>
        </section>
      </main>

      <footer>
        <div className="footer-section">
          <h3>Find Doctors</h3>
          <ul>
            <li>Neurologists</li>
            <li>Psychiatrists</li>
            <li>Oncologists</li>
            <li>Dermatologists</li>
            <li>Cardiologists</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Staff</h3>
          <ul>
            <li>Manager</li>
            <li>Offer jobs</li>
            <li>SEO</li>
            <li>Help desk support</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li>Terms</li>
            <li>Privacy Policy</li>
            <li>How it Works</li>
            <li>About</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>More</h3>
          <ul>
            <li>License</li>
            <li>Documentation</li>
          </ul>
        </div>
        <div className="footer-bottom">
          <p>Copyright © 2021. Created with love.</p>
          <div className="language-selector">
            <button>PL</button>
            <button>EN</button>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById('root'));

