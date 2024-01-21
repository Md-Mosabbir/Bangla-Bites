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

  gsap.fromTo(
    text.words,
    {
      color: bg,
      opacity: 0.6,
    },
    {
      color: fg,
      stagger: 0.5,
      scrollTrigger: {
        trigger: split,
        start: "+=900",
        end: "+=500",

        scrub: true,
      },
      opacity: 1,
    },
  )
}

export default aboutUs
