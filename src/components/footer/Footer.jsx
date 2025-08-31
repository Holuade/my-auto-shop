import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact">
      <div className="map">
        <iframe
         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.119678870214!2d3.5770937758624513!3d6.50653152335853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bfb64f70a55f7%3A0xf1d0852415d66cdf!2sBRAINBOSS%20Automobile!5e0!3m2!1sen!2sng!4v1756627602539!5m2!1sen!2sng"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Workshop Location"
        ></iframe>
      </div>

      <div className="footer-info">
        <div className="footer-grid">
          {/* Workshop */}
          <div className="footer-item">
            <h3>
              <i className="fas fa-car"></i> Workshop
            </h3>
            <p>
              <i className="fas fa-map-marker-alt"></i> 123 Main Street, Ibadan
            </p>
            <p>
              <i className="fas fa-phone"></i> +234 905 605 3834
            </p>
            <p>
              <i className="fas fa-envelope"></i> info@bodyshop.com
            </p>
          </div>

    
          <div className="footer-item">
            <h3>Bodyshop</h3>
            <p>
              <i className="fas fa-map-marker-alt"></i> 456 Repair Avenue,
              Lagos
            </p>
          </div>

         
          <div className="footer-item footer-services">
            <h3>Services</h3>
            <ul>
              <li>Car Repair</li>
              <li>Painting</li>
              <li>Wheel Alignment</li>
              <li>Diagnostics</li>
            </ul>
          </div>

          
          <div className="footer-item">
            <h3>Opening Hours</h3>
            <p>Mon - Fri: 8:00am - 6:00pm</p>
            <p>Sat: 9:00am - 4:00pm</p>
            <p>Sun: Closed</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© 2025 Bodyshop. All Rights Reserved | Terms & Conditions</p>
        <div className="footer-social">
          <a href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
