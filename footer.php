<footer class="footer-area gradient-bg-primary">
  <!-- Main Footer Widgets -->
  <div class="footer-widget-wrapper-box">
    <div class="container rr-container-1410">
      <div class="footer-widget-wrapper">
        <!-- Company Info -->
        <div class="footer-widget-box">
          <div class="footer-logo">
            <a href="index.php"><img src="assets/imgs/logo/tcwhitelogo.png" alt="techcadd Logo"></a>
          </div>
          <div class="footer-text">
            <p class="text">We are passionate about empowering businesses through innovative and reliable technology solutions.</p>
          </div>
          <div class="footer-social">
            <a href="https://www.facebook.com/" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="https://x.com/?lang=en" aria-label="Twitter"><i class="fa-brands fa-twitter"></i></a>
            <a href="https://www.instagram.com/" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
            <a href="https://www.linkedin.com/" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
          </div>
        </div>

        <!-- Contact Info -->
        <div class="footer-widget-box">
          <h2 class="footer-widget-title">Address Company</h2>
          <ul class="footer-meta-list">
            <li>
              <span class="icon"><i class="fa-solid fa-location-dot"></i></span>
              <span class="text">Shop No 4, City Center, near Bus Stand, Model Town, Hoshiarpur, Punjab 146001</span>
            </li>
            <li>
              <span class="icon"><i class="fa-solid fa-phone"></i></span>
              <span class="text">Call Us: <a href="tel:+916284347710">+91 6284347710</a></span>
            </li>
            <li>
              <span class="icon"><i class="fa-solid fa-envelope"></i></span>
              <span class="text">Mail: <a href="info.techcaddjalandhar@gmail.com">info.techcaddjalandhar@gmail.com</a></span>
            </li>
            <li>
              <span class="icon"><i class="fa-solid fa-clock"></i></span>
              <span class="text">Office: 9:00 AM - 6:00 PM</span>
            </li>
          </ul>
        </div>

        <!-- Services -->
        <div class="footer-widget-box">
          <h2 class="footer-widget-title">Our Services</h2>
          <ul class="footer-nav-list">
            <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Database Solution</a></li>
            <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Data Protection</a></li>
            <li><a href="#"><i class="fa-solid fa-chevron-right"></i>App Development</a></li>
            <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Machine Learning</a></li>
            <li><a href="#"><i class="fa-solid fa-chevron-right"></i>Helpdesk Services</a></li>
          </ul>
        </div>

        <!-- Map Section - 1:1 Aspect Ratio -->
        <div class="footer-widget-box map-container">
          <h2 class="footer-widget-title">Our Location</h2>
          <div class="map-wrapper">
            <!-- Google Maps Embed -->
            <div class="map-responsive">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.6040805927246!2d75.90096607463609!3d31.53503234641927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391ae36967d22185%3A0xc26818cecea50ada!2sHoshiarpur%20TechCADD%20Computer%20Training%20Center%20Digital%20Marketing%20Course%20Basic%20Computer%20Course%20Tally%20Course%20Web%20Designing%20Course!5e0!3m2!1sen!2sin!4v1765166533074!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style="border:0;" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"
                aria-label="Google Maps location of techcadd office"
                title="Hoshiarpur">
              </iframe>
              
            </div>
            
            <!-- Fallback for slow connections or disabled JavaScript -->
            <div class="map-fallback">
              <div class="fallback-content">
                <i class="fa-solid fa-map-location-dot"></i>
                <p>View our location on Google Maps</p>
                <a href="https://goo.gl/maps/example" target="_blank" class="map-link-btn">
                  Open in Maps <i class="fa-solid fa-external-link-alt"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Newsletter Section -->
  

  <!-- Copyright Section -->
  <div class="copyright-area">
    <div class="container rr-container-1410">
      <div class="copyright-area-inner">
        <div class="copyright-text">
          <p class="text">Copyright @ 2025 <a href="index.php">techcadd</a>. All Rights Reserved.</p>
        </div>
        <div class="copyright-link">
          <a href="privacy-policy.php">Privacy policy</a>
          <a href="terms.php">Terms of use</a>
          <a href="sitemap.php">Site map</a>
        </div>
      </div>
    </div>
  </div>
</footer>

<style>
/* Responsive Footer Styles */

 .gradient-bg-primary {
    background: linear-gradient(135deg, #6421FF 0%, #62a0e7 100%);
    background-attachment: fixed;
    color: white;
  }
  
  @media (max-width: 768px) {
    .gradient-bg-primary {
      background-attachment: scroll;
    }
  }


.footer-area {
  background: #1a1a1a;
  color: #fff;
}

.footer-widget-wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  padding: 60px 0;
}

.footer-widget-box {
  margin-bottom: 20px;
}

.footer-widget-title {
  font-size: 20px;
  margin-bottom: 25px;
  color: #fff;
  position: relative;
  padding-bottom: 10px;
}

.footer-widget-title::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 50px;
  height: 2px;
  background: #4a6cf7;
}

/* Map Section Styles */
.map-container {
  grid-column: 4;
}

.map-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 1/1; /* 1:1 Aspect Ratio */
  background: #2a2a2a;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.3);
}

.map-responsive {
  width: 100%;
  height: 100%;
  position: relative;
}

.map-responsive iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.map-fallback {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #2a2a2a;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
  opacity: 0;
  transition: opacity 0.3s;
}

.map-fallback .fallback-content {
  color: #fff;
}

.map-fallback i {
  font-size: 48px;
  color: #4a6cf7;
  margin-bottom: 15px;
}

.map-fallback p {
  margin-bottom: 15px;
  color: #ccc;
}

.map-link-btn {
  display: inline-block;
  padding: 10px 20px;
  background: #4a6cf7;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: background 0.3s;
}

.map-link-btn:hover {
  background: #3a5ce5;
}

/* Newsletter Styles */
.footer-newsletter-box {
  background: #2a2a2a;
  padding: 40px 0;
  border-top: 1px solid #333;
  border-bottom: 1px solid #333;
}

.footer-newsletter-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
}

.footer-newsletter-content {
  display: flex;
  align-items: center;
  gap: 20px;
  flex: 1;
}

.footer-newsletter-content .icon img {
  width: 60px;
  height: 60px;
}

.footer-newsletter-form {
  flex: 1;
  max-width: 500px;
}

/* Copyright Styles */
.copyright-area {
  padding: 20px 0;
  background: #151515;
}

.copyright-area-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}

.copyright-link a {
  color: #ccc;
  text-decoration: none;
  margin-left: 25px;
  transition: color 0.3s;
}

.copyright-link a:hover {
  color: #4a6cf7;
}

/* Responsive Design */
@media (max-width: 1200px) {
  .footer-widget-wrapper {
    grid-template-columns: repeat(3, 1fr);
  }
  
  .map-container {
    grid-column: 1 / span 3;
    margin-top: 30px;
  }
  
  .map-wrapper {
    max-width: 500px;
    margin: 0 auto;
  }
}

@media (max-width: 992px) {
  .footer-widget-wrapper {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }
  
  .map-container {
    grid-column: 1 / span 2;
  }
  
  .footer-newsletter-wrapper {
    flex-direction: column;
    text-align: center;
  }
  
  .footer-newsletter-content {
    flex-direction: column;
    text-align: center;
  }
}

@media (max-width: 768px) {
  .footer-widget-wrapper {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .map-container {
    grid-column: 1;
  }
  
  .map-wrapper {
    max-width: 100%;
  }
  
  .copyright-area-inner {
    flex-direction: column;
    text-align: center;
  }
  
  .copyright-link a {
    margin: 0 10px;
  }
  
  .footer-widget-title {
    font-size: 18px;
  }
}

@media (max-width: 480px) {
  .footer-widget-wrapper {
    padding: 40px 0;
  }
  
  .footer-newsletter-box {
    padding: 30px 0;
  }
  
  .copyright-link {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  .copyright-link a {
    margin: 0;
  }
  
  .map-wrapper {
    aspect-ratio: 16/9; /* Wider aspect ratio on very small screens */
  }
}

/* Accessibility Improvements */
.footer-social a,
.footer-nav-list a,
.copyright-link a {
  transition: all 0.3s ease;
}

.footer-social a:hover,
.footer-nav-list a:hover {
  transform: translateY(-2px);
}

/* Focus styles for accessibility */
.footer-social a:focus,
.footer-nav-list a:focus,
.copyright-link a:focus,
.map-link-btn:focus {
  outline: 2px solid #4a6cf7;
  outline-offset: 2px;
}

/* Loading state for map */
.map-wrapper.loading .map-fallback {
  opacity: 1;
}
</style>

<script>
// Optional JavaScript for enhanced map functionality
document.addEventListener('DOMContentLoaded', function() {
  const mapWrapper = document.querySelector('.map-wrapper');
  const mapFallback = document.querySelector('.map-fallback');
  
  // Show fallback if iframe fails to load
  const mapIframe = document.querySelector('.map-responsive iframe');
  
  if (mapIframe) {
    mapIframe.addEventListener('load', function() {
      mapWrapper.classList.remove('loading');
    });
    
    mapIframe.addEventListener('error', function() {
      mapWrapper.classList.add('loading');
    });
  }
  
  // Lazy loading for better performance
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const iframe = entry.target.querySelector('iframe');
        if (iframe && !iframe.src) {
          iframe.src = iframe.dataset.src;
          observer.unobserve(entry.target);
        }
      }
    });
  }, {
    rootMargin: '50px'
  });
  
  observer.observe(mapWrapper);
});
</script>