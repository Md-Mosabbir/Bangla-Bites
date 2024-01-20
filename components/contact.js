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
        <p>bengal@gmail.com</p>
      </div>
  
      <div class="address">
        <p>01234567889</p>
        <p>Avenue Plaza</p>
        <p>Gushan, Dhaka</p>
      </div> 
    </section>
  `

  root.innerHTML = "" // Clear the content before adding the contact module
  root.appendChild(contactContainer)
  footerModule()

  // GSAP Animation
}

export default contact
