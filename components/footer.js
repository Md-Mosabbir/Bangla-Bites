import gsap from "gsap"
import "../styles/footer.css"

function footerModule() {
  const root = document.getElementById("root")

  const footer = document.createElement("footer")
  footer.classList.add("footer-container")

  footer.innerHTML = `
  <div class="footer-content">
    <div class="footer-text">
      <h3>Contact Us</h3>
      <p>123 Restaurant Street, Dhaka</p>
      <p>Phone: +123 456 789</p>
      <p>Email: info@bengali-delights.com</p>
    </div>
    <div class="social-icons">
      <a href="#" target="_blank" rel="noopener noreferrer">
        <img src="./assets/facebook-icon.png" alt="Facebook Icon">
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <img src="./assets/twitter-icon.png" alt="Twitter Icon">
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <img src="./assets/instagram-icon.png" alt="Instagram Icon">
      </a>
    </div>
  </div>
    `

  root.appendChild(footer)

  // GSAP Animation
  gsap.from(footer, {
    y: 50,
    duration: 0.7,
    ease: "power2.out",
    scrollTrigger: {
      trigger: footer,
      end: "+=70",
      toggleActions: "restart none reverse none",
    },
  })
}

export default footerModule
