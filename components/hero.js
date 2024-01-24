import gsap from "gsap"
import "../styles/hero.css"
import SplitType from "split-type"
import heroImage from "../assets/delicious-fresh-food-plate.jpg"

function hero() {
  const root = document.getElementById("root")

  const heroContainer = document.createElement("div")
  heroContainer.classList.add("hero-container")

  heroContainer.innerHTML = `
    <div class="hero-front-container">
        <div class="image-container">
            <img
                src= ${heroImage}
                alt="image of a fish curry"
            />
        </div>
         <section class="hero-text">
            <h1>Discover The Rich World Of Bangla Flavours</h1>
            <h2>Your passport ot Desi Delights!</h2>
        </section>
    </div>
    
    `

  root.appendChild(heroContainer)

  // GSAP Timeline
  const tl = gsap.timeline()

  // Animation for the hero text
  tl.from(".hero-text h2", {
    opacity: 0,
    duration: 0.3,
    ease: "power2.out",
  })

  const text = new SplitType(".hero-text h1", { types: "words" })

  // Animation for the hero text
  tl.fromTo(
    text.words,
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

  // Optionally, you can set the timeline to start when the page loads
  tl.play()

  const heroText = document.querySelector(".hero-text")
  const cursor = document.querySelector(".cursor")

  heroText.addEventListener("mouseenter", () => {
    cursor.classList.add("cursor-title-hover")
  })
  heroText.addEventListener("mouseleave", () => {
    cursor.classList.remove("cursor-title-hover")
  })
}

export default hero
