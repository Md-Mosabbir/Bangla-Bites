import Lenis from "@studio-freight/lenis"

import aboutUs from "./components/aboutUs"
import hero from "./components/hero"
import reviews from "./components/reviews"
import footerModule from "./components/footer"

// Smooth scroll

const lenis = new Lenis()

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

const root = document.getElementById("root")

const navigation = document.querySelector(".main-navigation")

const navButtons = document.querySelectorAll(".nav-btn")

navButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    // Remove "active" class from all buttons
    navButtons.forEach((btn) => {
      btn.classList.remove("active")
    })

    // Add "active" class to the clicked button
    e.target.classList.add("active")
  })
})

hero()
aboutUs()
reviews()
footerModule()
