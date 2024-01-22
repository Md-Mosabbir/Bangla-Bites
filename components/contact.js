import gsap from "gsap"
import "../styles/contact.css"
import footerModule from "./footer"

function contact() {
  const root = document.getElementById("root")

  const contactContainer = document.createElement("div")
  contactContainer.classList.add("contact-container")

  contactContainer.innerHTML = `
    <section class="contact-details">
      <div class="contact-text">
        <h1>Let's Get Connected</h1>
        <p class="email">bengal@gmail.com</p>

        <div class="opening-hours">
        <h2>Opening Hours</h2>
        <div>
          <p>Monday to Friday: 9:00 AM - 6:00 PM</p>
          <p>Saturday: 10:00 AM - 4:00 PM</p>
          <p>Sunday: Closed</p>
        </div>
      </div>


      </div>
      
  
      <div class="address">
        <p>01234567889</p>
        <p>Avenue Plaza</p>
        <p>Gushan, Dhaka</p>
      </div> 
    </section>
  `

  root.appendChild(contactContainer)

  footerModule()

  // GSAP Animation
  gsap.from(".contact-text h1", {
    y: 100,

    opacity: 0,
    duration: 1,
  })

  gsap.from(".address p", {
    x: 100, // move from right
    opacity: 0,
    duration: 1,
    stagger: 0.2, // stagger the animations
  })
}

export default contact
