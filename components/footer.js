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
    
  </div>
    `

  root.appendChild(footer)

  // GSAP Animation
  gsap.from(footer, {
    opacity: 0,
    duration: 0.7,
    ease: "power2.out",
    scrollTrigger: {
      trigger: footer,
      end: "+=90",

      toggleActions: "restart none reverse none",
    },
    x: "-100%", // Animate from left to right
  })
}

export default footerModule
