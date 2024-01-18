import gsap from "gsap"
import "../styles/hero.css"
import SplitType from "split-type"

function hero() {
  const root = document.getElementById("root")

  const heroContainer = document.createElement("div")
  heroContainer.classList.add("hero-container")
  heroContainer.classList.add("full-bleed")

  heroContainer.innerHTML = `
    <div class="hero-front-container">
        <div class="image-container">
            <img
                src="./assets/delicious-fresh-food-plate.jpg"
                alt="image of a fish curry"
            />
        </div>
         <section class="hero-text">
            <h1>Discover The Rich World Of Bangla Flavours</h1>
            <h2>your passport ot Desi Delights!</h2>
        </section>
    </div>
    
    `

  root.appendChild(heroContainer)

  // GSAP Timeline
  const tl = gsap.timeline({})

  // Animation for the hero text
  tl.from(".hero-text h2", {
    opacity: 0,
    duration: 0.3,
    ease: "power2.out",
  })

  // Animation for the main header
  tl.from(".main-header", {
    duration: 0.6,
    ease: "power1",
    y: -50,
  })

  // Animation for the logo
  tl.from(".header-logo", {
    x: -50,
    opacity: 0,
    duration: 0.7,
    ease: "power2.out",
  })

  // Animation for navigation buttons
  tl.from(".nav-btn", {
    y: -30,
    opacity: 0,
    stagger: 0.2, // Stagger the animation for each button
    duration: 0.5,
    ease: "power2.out",
  })
  const text = new SplitType(".hero-text h1", { types: "chars" })

  // Animation for the hero text
  tl.fromTo(
    text.chars,
    {
      y: 70,
      opacity: 0,
    },
    {
      stagger: 0.05,
      y: 0,
      duration: 0.5,
      opacity: 1,
    },
  )

  // Animation for the hero image
  tl.from(".image-container img", {
    scale: 1.2,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
  })

  // Optionally, you can set the timeline to start when the page loads
  tl.play()
}

export default hero
