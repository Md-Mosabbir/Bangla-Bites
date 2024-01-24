import "../styles/about.css"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import SplitType from "split-type"

gsap.registerPlugin(ScrollTrigger)

function aboutUs() {
  const root = document.getElementById("root")

  const aboutContainer = document.createElement("section")
  aboutContainer.classList.add("about-us")
  aboutContainer.innerHTML = `
    
      <div class="about-text-container">
        <div class="text-wrapper">
          <p id="text-content" data-bg-color="#ededeb" data-fg-color= "#000000" >
          Bengali Bites: Crafting experiences, celebrating Bangladeshi cuisine's soul. Connect with top chefs, create memorable meals, and savor joyful moments.          
          </p>
        </div>
    </div>
    
  `

  root.appendChild(aboutContainer)

  // Move these lines here after the content is added to the DOM
  const split = document.getElementById("text-content")
  const bg = split.dataset.bgColor
  const fg = split.dataset.fgColor

  const text = new SplitType(split, { types: "words" })
  const cursor = document.querySelector(".cursor")

  gsap.fromTo(
    text.words,
    {
      color: bg,
      opacity: 0.6,
    },
    {
      color: fg,
      stagger: 1.5,
      scrollTrigger: {
        trigger: split,
        start: "+=900",
        end: "+=500",

        scrub: true,
        onUpdate: (self) => {
          // Check if the progress is equal to 1 (animation complete)
          if (self.progress === 1) {
            // Remove your class when the animation is complete
            cursor.classList.remove("about-title-hover")
          }
        },
        onEnter: () => {
          // Add your class when entering the trigger
          cursor.classList.add("about-title-hover")
        },
        onLeaveBack: () => {
          // Remove your class when leaving the trigger in the reverse direction
          cursor.classList.remove("about-title-hover")
        },
      },
      opacity: 1,
    },
  )
}

export default aboutUs
