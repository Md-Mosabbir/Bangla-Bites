import "../styles/reviews.css"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

function reviews() {
  const reviewsList = [
    {
      name: "Suresh",
      description:
        "skljflksdjfksdjflksdfjajfiawefnvoianwefnafjwafiownfuinweiufskljflksdjfksdjflksdfjajfiawefnvoianwefnafjwafiownskljflksdjfksdjflksdfjajfiawefnvoianwefnafjwafiownnwuefnwnfiueh",
    },
    {
      name: "Muresh",
      description:
        "skljflksdjfksdjflksdfjajfiawefnvoianwefnafjwafiownfuiskljflksdjfksdjflksdfjajfiawefnvoianwefnafjwafiownnweiufnwuefnwnfiueh",
    },
  ]
  const root = document.getElementById("root")

  const aboutWrapper = document.createElement("section")
  aboutWrapper.classList.add("reviews-wrapper")

  const aboutContainer = document.createElement("div")
  aboutContainer.classList.add("reviews-container")

  reviewsList.forEach((review) => {
    const reviewBlock = document.createElement("article")
    reviewBlock.classList.add("review-block")
    const reviewName = document.createElement("h3")
    reviewName.classList.add("review-name")
    reviewName.classList.add("anim")

    reviewName.textContent = review.name

    const reviewDescription = document.createElement("p")
    reviewDescription.classList.add("review-text")

    reviewDescription.textContent = review.description

    reviewBlock.appendChild(reviewName)
    reviewBlock.appendChild(reviewDescription)
    aboutContainer.appendChild(reviewBlock)
  })
  aboutWrapper.appendChild(aboutContainer)

  root.appendChild(aboutWrapper)

  const sections = gsap.utils.toArray(".reviews-container article")

  // Initial state animation

  // Scroll-triggered animation
  const scrollTween = gsap.to(
    sections,

    {
      xPercent: -100 * (sections.length - 1),
      ease: "none",

      scrollTrigger: {
        trigger: ".reviews-wrapper",
        pin: true,
        scrub: 1,

        start: "-=200",
        end: "+=2000",
      },
    },
  )
}

export default reviews
