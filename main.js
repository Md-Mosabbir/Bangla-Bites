import Lenis from "@studio-freight/lenis"

import aboutUs from "./components/aboutUs"
import hero from "./components/hero"
import reviews from "./components/reviews"
import footerModule from "./components/footer"
import menu from "./components/menu"

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

function home() {
  hero()
  aboutUs()
  reviews()
  footerModule()
}

navButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    // Remove "active" class from all buttons
    navButtons.forEach((btn) => {
      btn.classList.remove("active")
    })

    // Add "active" class to the clicked button
    e.target.classList.add("active")

    const buttonText = e.target.textContent.trim().toLowerCase()

    root.replaceChildren()

    switch (buttonText) {
      case "home":
        home()
        break
      case "menus":
        menu()
        break

      default:
        home()
    }
  })
})

home()
