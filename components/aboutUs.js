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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo ab non
            quos optio maiores. Nulla ut itaque consequatur esse error, nobis
            minus eligendi asperiores mollitia a similique tempore dignissimos
            architecto incidunt accusamus deserunt nemo nisi eveniet corrupti unde
            voluptatibus? Atque minus quae aspernatur fugit reiciendis dolore fuga
            voluptates magni itaque. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Omnis, enim.
          </p>
        </div>
    </div>
    
  `

  root.appendChild(aboutContainer)

  // Move these lines here after the content is added to the DOM
  const split = document.getElementById("text-content")
  const bg = split.dataset.bgColor
  const fg = split.dataset.fgColor

  const text = new SplitType(split, { types: "chars" })

  gsap.fromTo(
    text.chars,
    {
      color: bg,
      opacity: 0.6,
    },
    {
      color: fg,
      stagger: 0.5,
      scrollTrigger: {
        trigger: split,
        start: "+=300",
        end: "+=500",

        scrub: true,
      },
      opacity: 1,
    },
  )
}

export default aboutUs
