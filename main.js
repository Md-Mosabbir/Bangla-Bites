import Lenis from "@studio-freight/lenis"
import gsap from "gsap"
import aboutUs from "./components/aboutUs"
import hero from "./components/hero"
import reviews from "./components/reviews"
import footerModule from "./components/footer"
import menu from "./components/menu"
import contact from "./components/contact"

const hamburger = document.querySelector(".hamburger")
const overlay = document.querySelector(".overlay-menu")
const cancelOverlay = document.querySelector(".cancel")

// Create a GSAP timeline for the overlay animation
const overlayTimeline = gsap.timeline({ paused: true })

// Function to initialize the timeline
function initializeTimeline() {
  overlayTimeline
    .fromTo(
      overlay,
      { opacity: 0, display: "flex", xPercent: 100 },
      { opacity: 1, xPercent: 0, duration: 0.5, ease: "power2.out" },
    )
    .from(
      ".overlay-menu a",
      { opacity: 0, x: 20, stagger: 0.1, duration: 0.5, ease: "power2.out" },
      "-=0.3",
    )
}

// Function to show the overlay with animation
function showOverlay() {
  overlayTimeline.play()
}

// Function to hide the overlay with animation
function hideOverlay() {
  overlayTimeline.reverse()
}

// Initialize the timeline
initializeTimeline()

cancelOverlay.addEventListener("click", hideOverlay)
hamburger.addEventListener("click", showOverlay)

const hamOptions = document.querySelectorAll(".options button")

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

hamOptions.forEach((button) => {
  button.addEventListener("click", (e) => {
    const buttonText = e.target.textContent.trim().toLowerCase()

    hideOverlay()

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
