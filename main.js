import Lenis from "@studio-freight/lenis"

import aboutUs from "./components/aboutUs"
import hero from "./components/hero"
import reviews from "./components/reviews"
import footerModule from "./components/footer"
import menu from "./components/menu"
import contact from "./components/contact"

const hamburger = document.querySelector(".hamburger")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("cross")
})

// Mouse animation and tracking ------------------->

const cursor = document.querySelector(".cursor")

// Check if the device supports hover (cursor-based interactions)
function updateCursor() {
  // Check if the device supports hover (cursor-based interactions)
  if (matchMedia("(hover: hover)").matches) {
    // Show the cursor on devices that support hover
    cursor.style.display = "block"

    document.addEventListener("mousemove", (e) => {
      cursor.style.left = `${e.clientX}px`
      cursor.style.top = `${e.clientY}px`
    })
  } else {
    // Hide the cursor on devices that don't support hover
    cursor.style.display = "none"
  }
}

// Initial check on page load
updateCursor()

// Update on window resize
window.addEventListener("resize", updateCursor)

// Smooth scroll

const lenis = new Lenis()

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

const root = document.getElementById("root")

const navigation = document.querySelector(".main-navigation")

const navButtons = document.querySelectorAll(".nav-btn span")

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
      case "contact":
        contact()
        break

      default:
        home()
    }
  })
})

home()
